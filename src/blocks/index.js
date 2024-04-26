import { fields } from "@keystatic/core";
export const HomeHero = {
  label: "Home Hero",
  schema: fields.object({
    title: fields.text({ label: "Title" }),
    subtitle: fields.text({ label: "Subtitle" }),
    bgImage: fields.image({
      label: "Hero background image",
      directory: "/public/images/",
      publicPath: "/images/",
    }),
    Button: fields.object({
      label: fields.text({ label: "firstButton" }),
      url: fields.text({ label: "firstButton Slug" }),
    }),
  }),
};
export const aboutmoorhouse = {
  label: "About moorhouse",
  schema: fields.object({
    pretitle: fields.text({ label: "Pretitle" }),
    heading: fields.text({ label: "Heading" }),
    title: fields.text({ label: "Title" }),
    subtitle: fields.text({ label: "Subtitle" }),
    description: fields.text({ label: "Description", multiline: true }),
    image: fields.image({
      label: "What we do image",
      directory: "/public/images/",
      publicPath: "/images/",
    }),
    Button: fields.object({
      label: fields.text({ label: "Button" }),
      url: fields.text({ label: "Button Slug" }),
    }),
  }),
};
export const WhatWeOffer = {
  label: "What we offer",
  schema: fields.object({
    pretitle: fields.text({ label: "Pretitle" }),
    heading: fields.text({ label: "Heading" }),
    bgImage: fields.image({
      label: "background image",
      directory: "/public/images/",
      publicPath: "/images/",
    }),
    whatweoffer: fields.array(
      fields.object({
        image: fields.image({
          label: "image",
          directory: "/public/images/",
          publicPath: "/images",
        }),
        title: fields.text({ label: " Text" }),
        subtitle: fields.text({ label: " Subtitle" }),
        description: fields.text({ label: " Description" }),
        Button: fields.object({
          label: fields.text({ label: "Button" }),
          url: fields.text({ label: "Button Slug" }),
        }),
      }),
      {
        label: "What we offer ",
        itemLabel: (props) => props.fields.title.value,
      }
    ),
  }),
};
export const Gallerys = {
  label: "Gallery",
  schema: fields.object({
    pretitle: fields.text({ label: "Pretitle" }),
    heading: fields.text({ label: "Heading" }),
    galleryImages: fields.array(
      fields.image({
        label: "Gallery picture",
        directory: "/public/images/",
        publicPath: "/images",
      }),
      
    ),
  }),
};

export const WhatToExpect = {
  label: "What to expect",
  schema: fields.object({
    pretitle: fields.text({ label: "Pretitle" }),
    heading: fields.text({ label: "Heading" }),
    WhatToExpect: fields.array(
      fields.object({
        Cardicon: fields.image({
          label: "Card Icon",
          directory: "/public/images/",
          publicPath: "/images",
        }),
        cardText: fields.text({ label: "Card Text" }),
        cardDescription: fields.text({ label: "Card Description" }),
      }),
      {
        label: "What To Expect",
        itemLabel: (props) => props.fields.cardText.value,
      }
    ),
  }),
};
export const industrialPainting = {
  label: "Industrial Painting ",
  schema: fields.object({
    title: fields.text({ label: "Title" }),
    subtitle: fields.text({ label: "Subtitle" }),
    bgImage: fields.image({
      label: "Background Image",
      directory: "/public/images/",
      publicPath: "/images",
    }),
    Button: fields.object({
      label: fields.text({ label: "firstButton" }),
      link: fields.text({ label: "firstButton Slug" }),
    }),
  }),
};
export const FrequentlyAskedQuestions={
  label: "Frequently Asked Questions",
  schema: fields.object({
    pretitle: fields.text({ label: "Pretitle" }),
    heading: fields.text({ label: "Heading" }),
    FrequentlyAskedQuestions: fields.array(
      fields.object({
        title: fields.text({ label: "Question" }),
        answer: fields.text({ label: "Answer" }),
      }),
      {
        label: "Frequently Asked Questions",
        itemLabel: (props) => props.fields.title.value,
      }
    ),
  }),
}
export const Testimonials = {
  label: "Testimonials",
  schema: fields.object({
    pretitle: fields.text({ label: "Pretitle" }),
    heading: fields.text({ label: "Heading" }),
    Testimonials: fields.array(
      fields.object({
        rating: fields.number({
          label: "rating",
          hideStepper: false,
          validation: {
            min: 0,
            max: 5,
            validateStep: true,
          },
        }),
        cardText: fields.text({ label: "Card Text" }),
        author: fields.image({
          label: "Author picture",
          directory: "/public/images/",
          publicPath: "/images",
        }),
        authorName: fields.text({ label: "Author Name" }),
        authorpost: fields.text({ label: "Author designation" }),
      }),

      {
        label: "Testimonials",
        itemLabel: (props) => props.fields.cardText.value,
      }
    ),
  }),
};
