import Sortables from './index';
import BasicJson from 'features/mockjson/basic.json';


    // Test that the Sortables function can handle data with missing keys
    it('should handle data with missing keys', () => {
      const mockData = BasicJson;

      const wrapper = shallow(<Sortables />);
      wrapper.setProps({ items: mockData });

      expect(wrapper.find("th").length).toBe(Object.keys(mockData[0]).length);
      expect(wrapper.find("td").length).toBe(Object.keys(mockData[0]).length * (mockData.length));
    });


    // Test that the Sortables function can handle data with keys that have null or undefined values
    it('should handle null and undefined values in data keys', () => {
      const data = BasicJson;

      const wrapper = shallow(<Sortables />);
      wrapper.setProps({ items: data });

      // Assert the rendered table has the correct number of rows and columns
      expect(wrapper.find('tbody tr')).toHaveLength(4);
      expect(wrapper.find('tbody tr td')).toHaveLength(12);

      // Assert the rendered table has the correct values
      expect(wrapper.find('tbody tr').at(0).find('td').at(0).text()).toBe('*Celcom Axiata (LTE)');
      expect(wrapper.find('tbody tr').at(0).find('td').at(1).text()).toBe('CELCOM / My Celcom / 502 19');
      expect(wrapper.find('tbody tr').at(0).find('td').at(2).text()).toBe('Yes');
      expect(wrapper.find('tbody tr').at(1).find('td').at(0).text()).toBe('*DiGi Telecom (LTE)');
      expect(wrapper.find('tbody tr').at(1).find('td').at(1).text()).toBe('DiGi 1800 / DiGi /  MYMY18');
      expect(wrapper.find('tbody tr').at(1).find('td').at(2).text()).toBe('Yes');
      expect(wrapper.find('tbody tr').at(2).find('td').at(0).text()).toBe('*Maxis (LTE)');
      expect(wrapper.find('tbody tr').at(2).find('td').at(1).text()).toBe('U Mobile / MYS 18 / MY 18');
      expect(wrapper.find('tbody tr').at(2).find('td').at(2).text()).toBe('Yes');
    });

