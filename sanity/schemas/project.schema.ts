const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },

    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "details",
      title: "Details",
      type: "object",
      fields: [
        {
          name: "year",
          type: "string",
          title: "Year",
        },
        {
          name: "month",
          type: "string",
          title: "Month",
        },
        {
          name: "service",
          type: "string",
          title: "Service",
        },

        {
          name: "client",
          type: "string",
          title: "Client",
        },
        {
          name: "location",
          type: "string",
          title: "Location",
        },
      ],
    },
    {
      name: "gallery",
      type: "array",
      title: "Gallery",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt text",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
  ],
};

export default project;
