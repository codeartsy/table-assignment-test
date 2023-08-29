# Table Components Technical Document

# Table of Contents

- Introduction
- Purpose
- Entry Points
- Components
- Basic
- Sortables
- RadioTable
- CheckboxTable
- Usage
- Home Component (Desktop)
- MobileHome Component (Mobile)
- Props
- Component Structure
- Examples
- Implementing Home (Desktop)
- Implementing MobileHome (Mobile)
- Best Practices
- Reusability
- Maintainability

# 1. Introduction

# Purpose

- The Table Components library provides a set of components to display tabular data with various functionalities. These components are designed for both desktop and mobile views.
  Entry Points
- The library's entry points are the Home component for desktop views and the MobileHome component for mobile views. The MobileHome component is automatically loaded for views less than or equal to 1000px.

# 2. Components

# Basic

- The Basic component renders a basic table for desktop views. It accepts data via props and adjusts columns and rows to accommodate the data.

# Sortables

- The Sortables component renders a sortable table for desktop views. It populates the table with an array of data and provides sorting functionality for each column.

# RadioTable

- The RadioTable component renders a table with radio buttons for desktop views. It accepts an array of data as a prop and allows users to select a single row using radio buttons.

# CheckboxTable

- The CheckboxTable component renders a table with checkboxes for desktop views. It accepts an array of data as a prop and allows users to manually select multiple rows using checkboxes.

# 3. Usage

# Home Component (Desktop)

- The Home component for desktop views showcases different types of tables using the Basic, Sortables, RadioTable, and CheckboxTable components.

# MobileHome Component (Mobile)

- The MobileHome component for mobile views displays the Basic, RadioTable, and CheckboxTable components automatically for views less than or equal to 1000px.

# 4. Props

Each component may accept different props to customize their behavior, such as providing data to display in the table.

** Please Note: Mobile Component will only be loaded if the viewstate has width <=1000px and it will be reflected on page reload due to react-router change of page.**

# Component Structure

Table Components/
|-- Home.js
|-- MobileHome.js
|-- components/
| |-- Basic.js
| |-- Sortables.js
| |-- RadioTable.js
| |-- CheckboxTable.js
|-- mobile/
| |-- components/
| |-- Basic.js
| |-- RadioTable.js
| |-- CheckboxTable.js
|-- mockjson/
| |-- basic.json
| |-- radio.json
| |-- checkbox.json
|-- ...

# Installation and setup:

- npm install
- npm start

# Unit testing\*

- npm run test [Test covered using jest and enzyme]

- React Version:
- React 17.x

- Created via Create React App [**No thirdparty library used**]

# Examples

# Implementing Home (Desktop)

# Home.js

import React from 'react';
import './Home.css';
import Basic from 'features/app/Tables/components/Basic';
import Sortables from 'features/app/Tables/components/Sortables';
import RadioTable from 'features/app/Tables/components/RadioTable';
import CheckboxTable from 'features/app/Tables/components/CheckboxTable';
import BasicJson from 'features/mockjson/basic.json';
import RadioJson from 'features/mockjson/radio.json';
import CheckboxJson from 'features/mockjson/checkbox.json';

const Home = () => {
return (
// ... render each component with appropriate props
);
}

export default Home;

````

# Implementing Mobile based table components
# MobileHome.js
```import React from 'react';
import './MobileHome.css';
import Basic from 'features/app/Tables/mobile/components/Basic';
import RadioTable from 'features/app/Tables/mobile/components/RadioTable';
import CheckboxTable from 'features/app/Tables/mobile/components/CheckboxTable';
import BasicJson from 'features/app/mockjson/basic.json';
import RadioJson from 'features/app/mockjson/radio.json';
import CheckboxJson from 'features/app/mockjson/checkbox.json';

const MobileHome = () => {
  return (
    <Basic data={BasicJson} /> //Compatible with mobile  or tablet layout
  );
}

export default MobileHome;
````

# Implementing Basic Table

```import React from 'react';
import BasicTable from './components/Table/BasicTable';

const Home = () => {
  const data = /* ... */; // Your data here

  return (
    <div>
      <h1>Basic Table</h1>
      <BasicTable data={data} />
    </div>
  );
};

export default Home;
```

# Implementing Sortable Table Desktop

```import React from 'react';
import SortableTable from './components/Table/SortableTable';

const Home = () => {
  const data = /* ... */; // Your data here

  return (
    <div>
      <h1>Sortable Table</h1>
      <SortableTable data={data} />
    </div>
  );
};

export default Home;
```

# Implementing Checkbox Table Desktop

```import React from 'react';
import CheckboxTable from './components/Table/CheckboxTable';

const Home = () => {
  const data = /* ... */; // Your data here

  return (
    <div>
      <h1>Checkbox Table</h1>
      <CheckboxTable data={data} />
    </div>
  );
};

export default Home;
```

# Implementing Radio Table Desktop

```import React from 'react';
import RadioTable from './components/Table/RadioTable';

const Home = () => {
  const data = /* ... */; // Your data here

  return (
    <div>
      <h1>Radio Table</h1>
      <RadioTable data={data} />
    </div>
  );
};

export default Home;
```

# Best Practices

# Reusability

- Keep components focused on their specific functionalities.
- Utilize components' reusability by passing appropriate props.

# Maintainability

- Organize code and assets in a structured manner.
  Use meaningful variable and function names for clarity.
- This documentation provides an overview of the Table Components library, its purpose, usage, and key components. Further details and customization can be implemented based on your project's requirements.
- Remember to adapt and expand this documentation based on your needs and provide further explanations, code examples, and additional usage details.
