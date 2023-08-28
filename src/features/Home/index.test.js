import Home from "./index";
import Basic from "features/app/Tables/components/Basic";
import CheckboxTable from "features/app/Tables/components/CheckboxTable";

    // Test that the CheckboxTable component renders correctly when provided with empty data
    it('should render CheckboxTable with empty data', () => {
      // Arrange
      const wrapper = shallow(<Home />);
  
      // Act
      const checkboxTable = wrapper.find(CheckboxTable);
  
      // Assert
      expect(checkboxTable.exists()).toBe(true);
      expect(checkboxTable.prop('CheckboxJson')).toEqual(undefined);
    });


    // Test that the Basic table component renders correctly with empty data
    it('should render basic table with empty data', () => {
      // Arrange
      const wrapper = shallow(<Home />);
  
      // Act
      const basicTable = wrapper.find(Basic);
  
      // Assert
      expect(basicTable.exists()).toBe(true);
      expect(basicTable.prop('tableData')).toEqual(undefined);
    });

