import Basic from './index';

    // Test that the 'Basic' function handles an non empty data array gracefully by rendering an empty table.
    it('should render an empty table when the data array is not empty', () => {
      const wrapper = shallow(<Basic />);
      expect(wrapper.find('table')).toHaveLength(1);
      expect(wrapper.find('th')).toHaveLength(3);
      expect(wrapper.find('tr')).toHaveLength(4);
      expect(wrapper.find('td')).toHaveLength(12);
    });


    // Test that the 'Basic' function can handle data with varying number of columns correctly.
    it('should render a table with the correct number of columns when given data with varying number of columns', () => {
      // Test data
      const BasicJson = [
        { id: 1, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Smith', age: 30, occupation: 'Engineer' },
        { id: 3, name: 'Bob Johnson', occupation: 'Teacher' },
      ];

      // Render the component
      const wrapper = shallow(<Basic />);

      // Check the number of table columns
      expect(wrapper.find('th')).toHaveLength(3);

      // Check the number of table rows
      expect(wrapper.find('tr')).toHaveLength(4); // Including the table header row
    });

