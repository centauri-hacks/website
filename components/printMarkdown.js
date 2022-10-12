import Markdown from 'markdown-to-jsx';
import Link from "../components/link.js";
import Paragraph from "../components/paragraph.js";
import Heading from "../components/heading.js";
import { useState, useEffect } from 'react';


export default function PrintMarkdown({ markdown }) {
  return ( <Markdown options={{
    overrides: {
      h1: {
        component: Heading,
        props: {
          type: "h1"
        }
      },
      h2: {
        component: Heading,
        props: {
          type: "h2"
        }
      },
      h3: {
        component: Heading,
        props: {
          type: "h3"
        }
      },
      h4: {
        component: Heading,
        props: {
          type: "h4",
        },
      },
      h5: {
        component: Heading,
        props: {
          type: "h5"
        },
      },
      p: {
        component: Paragraph,
      },

      a: {
        component: Link,
      }
    }
  }}>{markdown}</Markdown>);
}


// , {
//   "remarkReactComponents": {
//     a: (props) => <Link {...props}></Link>,
//     p: Paragraph,
//     h1: (props) => <Heading type="h1" {...props} />,
//     h2: (props) => <Heading type="h2" {...props} />,
//     h3: (props) => <Heading type="h3" {...props} />,
//     h4: (props) => <Heading type="h4" {...props} />,
//     h5: (props) => <Heading type="h5" {...props} />,
//   },
// }