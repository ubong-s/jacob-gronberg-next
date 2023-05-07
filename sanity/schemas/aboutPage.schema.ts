const aboutPage = {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "aboutHero",
      title: "About Hero",
      type: "object",
      fields: [
        {
          name: "firstName",
          title: "First Name",
          type: "string",
        },
        {
          name: "lastName",
          title: "Last Name",
          type: "string",
        },
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "about",
      title: "About",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "recognitions",
      type: "array",
      title: "Recognitions",
      of: [
        {
          name: "recognition",
          type: "object",
          title: "Recognition",
          fields: [
            {
              name: "award",
              type: "string",
              title: "Award",
            },
            {
              name: "organization",
              type: "string",
              title: "Organization",
            },
            {
              name: "date",
              type: "string",
              title: "Date",
            },
          ],
        },
      ],
    },
    {
      name: "experiences",
      type: "array",
      title: "Experiences",
      of: [
        {
          name: "experience",
          type: "object",
          title: "Experience",
          fields: [
            {
              name: "role",
              type: "string",
              title: "Role",
            },
            {
              name: "company",
              type: "string",
              title: "Company",
            },
            {
              name: "timeline",
              type: "string",
              title: "Timeline",
            },
          ],
        },
      ],
    },
  ],
};

export default aboutPage;
