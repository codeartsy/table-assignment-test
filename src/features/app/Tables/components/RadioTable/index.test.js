import RadioTable from "./index";
import RadioJson from 'features/mockjson/radio.json';

    // Test that the RadioTable component renders a table with data containing null or undefined values
    it('should render table with null or undefined values', () => {
      // Mock the RadioJson data with null and undefined values
      const mockData = [
        { id: 1, name: null, age: 25 },
        { id: 2, name: "John", age: undefined },
        { id: 3, name: "Jane", age: 30 }
      ];

      // Render the RadioTable component with the mock data
      const wrapper = shallow(<RadioTable />);

      // Set the RadioJson data to the mock data
      wrapper.setProps({ RadioJson: mockData });

      // Check if the table renders correctly
      expect(wrapper.find('table')).toHaveLength(1);
      expect(wrapper.find('thead')).toHaveLength(1);
      expect(wrapper.find('tbody')).toHaveLength(1);

      // Check if the table headers render correctly
      expect(wrapper.find('th')).toHaveLength(Object.keys(mockData[0]).length + 2); // +1 for the radio button column

      // Check if the table rows render correctly
      expect(wrapper.find('tr')).toHaveLength(mockData.length + 1);
    });


    // Test that the RadioTable component renders a table with empty data.
    it('should render table with empty data', () => {
      // Render the RadioTable component
      const wrapper = shallow(<RadioTable />);
  
      // Check if the table exists
      expect(wrapper.find('table')).toHaveLength(1);
  
      // Check if the table has the correct width attribute
      expect(wrapper.find('table').prop('width')).toBe('100%');
  
      // Check if the table has a thead element
      expect(wrapper.find('thead')).toHaveLength(1);
  
      // Check if the table has a th element for each column in the data
      expect(wrapper.find('thead').find('th')).toHaveLength(Object.keys(RadioJson[0]).length + 1);
  
      // Check if the table has a tbody element
      expect(wrapper.find('tbody')).toHaveLength(1);
  
      // Check if the table has 4 rows in the tbody
      expect(wrapper.find('tbody').find('tr')).toHaveLength(4);
    });

