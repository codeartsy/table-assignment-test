import { detectMobile } from "./utils";

    // Test that the detectMobile function returns false when the window innerWidth is greater than 1000.
    it('should return false when window innerWidth is greater than 1000', () => {
      
      // Mock the window object
      global.window = { innerWidth: 1200 };
      // Arrange
      const originalInnerWidth = window.innerWidth;
      // window.innerWidth = 1200;
      
      // Act
      const result = detectMobile();

      // Assert
      expect(result).toBe(false);

      // Clean up
      window.innerWidth = originalInnerWidth;
    });


    // Test that the 'detectMobile' function returns true when the window innerWidth is exactly 1000.
    it('should return true when window innerWidth is exactly 1000', () => {
      // Mock the window object
      global.window = { innerWidth: 1000 };
      // Arrange
      const originalInnerWidth = window.innerWidth;
      window.innerWidth = 1000;
      // Act
      const result = detectMobile();

      // Assert
      expect(result).toBe(true);

      // Clean up
      window.innerWidth = originalInnerWidth;
    });


    // Test that the detectMobile function returns false when the window.innerWidth is greater than 1000.
    it('should return false when window.innerWidth is greater than 1000', () => {
      // Mock the window object
      global.window = { innerWidth: 1200 };

      // Call the detectMobile function and expect it to return false
      expect(detectMobile()).toBe(false);

      // Clean up the mock
      delete global.window;
    });


    // Test that the detectMobile function returns true when the window innerWidth is less than or equal to 1000
    it('should return true when window innerWidth is less than or equal to 1000', () => {
      // Mock the window object
      global.window = { innerWidth: 1000 };
      // Set up
      const originalInnerWidth = window.innerWidth;
      window.innerWidth = 800;
      // Execute
      const result = detectMobile();

      // Verify
      expect(result).toBe(true);

      // Clean up
      window.innerWidth = originalInnerWidth;
    });

