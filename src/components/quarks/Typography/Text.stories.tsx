import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Text from './Text';
import { IText } from './type';

export default {
    tags: ['autodocs'],
  component: Text,
  argTypes: {
    as: {
      control: {
        type: 'select',
        options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
    role: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Text',
  },
};

export const Heading: Story = {
  args: {
    as: 'h1',
    children: 'Heading',
  },
};

export const Paragraph: Story = {
  args: {
    as: 'p',
    children: 'Paragraph',
  },
};

export const Heading1: Story = {
  args: {
    as: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    as: 'h2',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    as: 'h3',
    children: 'Heading 3',
  },
};

export const Heading4: Story = {
  args: {
    as: 'h4',
    children: 'Heading 4',
  },
};

export const Heading5: Story = {
  args: {
    as: 'h5',
    children: 'Heading 5',
  },
};

export const Heading6: Story = {
  args: {
    as: 'h6',
    children: 'Heading 6',
  },
};

export const Span: Story = {
  args: {
    as: 'span',
    children: 'Span',
  },
};

export const Strong: Story = {
  args: {
    as: 'strong',
    children: 'Strong',
  },
};

export const Emphasis: Story = {
  args: {
    as: 'em',
    children: 'Emphasis',
  },
};

export const Mark: Story = {
  args: {
    as: 'mark',
    children: 'Mark',
  },
};

export const Small: Story = {
  args: {
    as: 'small',
    children: 'Small',
  },
};

export const Deleted: Story = {
  args: {
    as: 'del',
    children: 'Deleted',
  },
};

export const Inserted: Story = {
  args: {
    as: 'ins',
    children: 'Inserted',
  },
};

export const Subscript: Story = {
  args: {
    as: 'sub',
    children: 'Subscript',
  },
};

export const Superscript: Story = {
  args: {
    as: 'sup',
    children: 'Superscript',
  },
};

export const Code: Story = {
  args: {
    as: 'code',
    children: 'alert("Hello World")',
  },
};

export const Keyboard: Story = {
  args: {
    as: 'kbd',
    children: 'Ctrl + C',
  },
};

export const Sample: Story = {
  args: {
    as: 'samp',
    children: 'Sample',
  },
};

export const Variable: Story = {
  args: {
    as: 'var',
    children: 'Variable',
  },
};

export const Time: Story = {
  args: {
    as: 'time',
    children: 'Time',
  },
};


export const Blockquote: Story = {
  args: {
    as: 'blockquote',
    children: 'Blockquote',
  },
};

export const Address: Story = {
  args: {
    as: 'address',
    children: 'Address',
  },
};

export const Preformatted: Story = {
  args: {
    as: 'pre',
    children: 'Preformatted',
  },
};

export const UnorderedList: Story = {
  args: {
    as: 'ul',
    children: 'Unordered List',
  },
};

export const OrderedList: Story = {
  args: {
    as: 'ol',
    children: 'Ordered List',
  },
};

export const DescriptionList: Story = {
  args: {
    as: 'dl',
    children: 'Description List',
  },
};

export const DescriptionTerm: Story = {
  args: {
    as: 'dt',
    children: 'Description Term',
  },
};

export const DescriptionDetails: Story = {
  args: {
    as: 'dd',
    children: 'Description Details',
  },
};

export const Figure: Story = {
  args: {
    as: 'figure',
    children: 'Figure',
  },
};

export const FigureCaption: Story = {
  args: {
    as: 'figcaption',
    children: 'Figure Caption',
  },
};

export const Details: Story = {
  args: {
    as: 'details',
    children: 'Details',
  },
};

export const Summary: Story = {
  args: {
    as: 'summary',
    children: 'Summary',
  },
};

export const Main: Story = {
  args: {
    as: 'main',
    children: 'Main',
  },
};

export const Article: Story = {
  args: {
    as: 'article',
    children: 'Article',
  },
};

export const Aside: Story = {
  args: {
    as: 'aside',
    children: 'Aside',
  },
};

export const Footer: Story = {
  args: {
    as: 'footer',
    children: 'Footer',
  },
};
  

