import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const GridResponsiveVariationsExamples = () => (
  <ExampleSection title='Responsive Variations'>
    <ComponentExample
      title='Doubling'
      description='A grid can double its column width on tablet and mobile sizes.'
      examplePath='collections/Grid/ResponsiveVariations/GridExampleDoubling'
    />

    <ComponentExample
      title='Stackable'
      description='A grid can have its columns stack on-top of each other after reaching mobile breakpoints.'
      examplePath='collections/Grid/ResponsiveVariations/GridExampleStackable'
    />

    <ComponentExample
      title='Reversed'
      description='A grid or row can specify that its columns should reverse order at different device sizes.'
      examplePath='collections/Grid/ResponsiveVariations/GridExampleReversedComputer'
    />
    <ComponentExample examplePath='collections/Grid/ResponsiveVariations/GridExampleReversedTablet' />
    <ComponentExample examplePath='collections/Grid/ResponsiveVariations/GridExampleReversedMobile' />
    <ComponentExample examplePath='collections/Grid/ResponsiveVariations/GridExampleReversedComputerVertically' />
    <ComponentExample examplePath='collections/Grid/ResponsiveVariations/GridExampleReversedTabletVertically' />
    <ComponentExample examplePath='collections/Grid/ResponsiveVariations/GridExampleReversedMobileVertically' />

    <ComponentExample
      title='Device Visibility'
      description='A columns or row can appear only for a specific device, or screen sizes.'
      examplePath='collections/Grid/ResponsiveVariations/GridExampleDeviceVisibility'
    />

    <ComponentExample
      title='Responsive Width'
      description='A column can specify a width for a specific device.'
      examplePath='collections/Grid/ResponsiveVariations/GridExampleResponsiveWidth'
    />
  </ExampleSection>
)

export default GridResponsiveVariationsExamples
