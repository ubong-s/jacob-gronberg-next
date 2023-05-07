const exhibition = {
  name: "exhibition",
  title: "Exhibitions",
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
    {
      name: "ticketUrl",
      title: "Ticket URL",
      type: "url",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
    },
    {
      name: "fullDescription",
      title: "Full Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "information",
      title: "Information",
      type: "object",
      fields: [
        {
          name: "date",
          type: "date",
          title: "Date",
        },
        {
          name: "openingHours",
          type: "string",
          title: "Opening Hours",
        },

        {
          name: "address",
          type: "string",
          title: "Address",
        },
        {
          name: "venue",
          type: "string",
          title: "Venue",
        },
        {
          name: "city",
          type: "string",
          title: "City",
        },
        {
          name: "directions",
          type: "url",
          title: "Directions",
        },
      ],
    },
    {
      name: "status",
      type: "string",
      title: "Status",
      options: {
        list: ["upcoming", "completed"],
        layout: "radio",
        direction: "horizontal",
      },
    },
  ],
};

export default exhibition;
