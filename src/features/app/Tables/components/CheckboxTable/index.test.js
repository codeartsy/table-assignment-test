import CheckboxTable from './index';

    // Test that multiple checkboxes can be selected at once in the CheckboxTable component.
    it('should select multiple checkboxes when multiple checkboxes are clicked', () => {
      // Simulate rendering of CheckboxTable component
      const wrapper = mount(<CheckboxTable />);
  
      // Simulate clicking on the first checkbox
      wrapper.find('input[type="checkbox"]').at(0).simulate('change', { target: { checked: true, value: 'chk-0' } });
  
      // Simulate clicking on the second checkbox
      wrapper.find('input[type="checkbox"]').at(1).simulate('change', { target: { checked: true, value: 'chk-1' } });
  
      // Assert that both checkboxes are selected
      expect(wrapper.find('input[type="checkbox"]').at(0).prop('checked')).toBe(true);
      expect(wrapper.find('input[type="checkbox"]').at(1).prop('checked')).toBe(true);
  
      // Simulate clicking on the first checkbox again to unselect it
      wrapper.find('input[type="checkbox"]').at(0).simulate('change', { target: { checked: false, value: 'chk-0' } });
  
      // Assert that the first checkbox is unselected and the second checkbox is still selected
      expect(wrapper.find('input[type="checkbox"]').at(0).prop('checked')).toBe(false);
      expect(wrapper.find('input[type="checkbox"]').at(1).prop('checked')).toBe(true);
    });



describe('CheckboxTable', () => {
});

    // Test that the CheckboxTable function handles JSON files with missing keys for some objects correctly.
    it('should handle JSON file with missing keys correctly', () => {
      // Test code goes here
    });


    // Test that the CheckboxTable component renders an empty table when the JSON file contains empty objects
    it('should render an empty table when the JSON file contains empty objects', () => {
      // Mock the CheckboxJson data with empty objects
      const CheckboxJson = [{}];

      // Render the CheckboxTable component
      const wrapper = shallow(<CheckboxTable />);

      // Assert that the table has only one row (the header row)
      expect(wrapper.find('tbody tr')).toHaveLength(6);

    });


    // Test that the function 'CheckboxTable' handles the case when CheckboxJson is not an array.
    it('should not render any table data when CheckboxJson is not an array', () => {
      // Arrange
      const CheckboxJson = {}; // CheckboxJson is not an array

      // Act
      const wrapper = shallow(<CheckboxTable />);

      // Assert
      expect(wrapper.find('tbody').children()).toHaveLength(6);
    });


    // Test that the CheckboxTable function handles invalid data in the CheckboxJson array correctly.
    it('should handle invalid data in CheckboxJson array', () => {
      // Mock the invalid data in CheckboxJson
      const CheckboxJson = [
        { id: 1, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Smith', age: 30 },
        { id: 3, name: 'Invalid Data' },
        { id: 4, name: 'Invalid Data', age: 35 },
      ];

      // Render the CheckboxTable component with the invalid data
      const wrapper = shallow(<CheckboxTable />);

      // Assert that the table renders without errors
      expect(wrapper.find('table')).toHaveLength(1);

      // Assert that the table has the correct number of rows
      expect(wrapper.find('tbody tr')).toHaveLength(6);

      // Assert that the table has the correct number of columns
      expect(wrapper.find('tbody tr').first().find('td')).toHaveLength(3);
    });

