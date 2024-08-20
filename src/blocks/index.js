import { fields } from "@keystatic/core";
export const hero = {
  label: "Hero",
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
    sectionTitle: fields.text({ label: "Section Title" }),
    card: fields.object({
      title: fields.text({ label: "Card Title" }),
      description: fields.markdoc.inline({ label: "Card Description"}),
      image: fields.image({
        label: "Card Image",
        directory: "/public/images/",
        publicPath: "/images/",
      }),
      Button: fields.object({
        label: fields.text({ label: "Button" }),
        url: fields.text({ label: "Button Slug" }),
      }),
    }),
  }),
};
export const sectionTitleDescription = {
  label: "Section Title With Description",
  schema: fields.object({
    pretitle: fields.text({ label: "Pretitle" }),
    title: fields.text({ label: "Title" }),
    description: fields.markdoc.inline({ label: "Description" }),
  }),
}
export const twoColumn = {
  label: "Two Column Cards",
  schema: fields.object({
    cardWithImage: fields.array(
      fields.object({
        title: fields.text({ label: "Title" }),
        description: fields.text({ label: "Description", multiline: true }),
        image: fields.image({
          label: "What we do image",
          directory: "/public/images/",
          publicPath: "/images/",
        }),
        Button: fields.object({
          text: fields.text({ label: "Button Text" }),
          slug: fields.text({ label: "Button Slug" }),
        }),
      }),
      {
        label: "Card with Image",
        itemLabel: (props) => props.fields.title.value,
      }
    ),
  }),
};
export const whatWeOffer = {
  label: "What we offer",
  schema: fields.object({
    pretitle: fields.text({ label: "Pretitle" }),
    heading: fields.text({ label: "Heading" }),
    bgImage: fields.image({
      label: "background image",
      directory: "/public/images/",
      publicPath: "/images/",
    }),
    featureCards: fields.array(
      fields.object({
        cardIcon: fields.image({
          label: "Card Icon",
          directory: "/public/images/",
          publicPath: "/images",
        }),
        cardText: fields.text({ label: "Card Text" }),
        cardDescription: fields.text({ label: "Card Description" }),
      }),
      {
        label: "What we offer ",
        itemLabel: (props) => props.fields.cardText.value,
      }
    ),
    banner: fields.object({
      title: fields.text({ label: "Banner Title" }),
      button: fields.object({
        text: fields.text({ label: "Button Text" }),
        slug: fields.text({ label: "Button Slug" }),
      }),
    }),
  }),
};
export const gallery = {
  label: "Gallery",
  schema: fields.object({
    pretitle: fields.text({ label: "Pretitle" }),
    heading: fields.text({ label: "Heading" }),
    galleryImages: fields.array(
      fields.image({
        label: "Gallery picture",
        directory: "/public/images/",
        publicPath: "/images",
      })
    ),
  }),
};

export const whatToExpect = {
  label: "What to expect",
  schema: fields.object({
    pretitle: fields.text({ label: "Pretitle" }),
    heading: fields.text({ label: "Heading" }),
    cards: fields.array(
      fields.object({
        cardIcon: fields.image({
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
export const frequentlyAskedQuestions = {
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
};
export const testimonials = {
  label: "Testimonials",
  schema: fields.object({
    pretitle: fields.text({ label: "Pretitle" }),
    heading: fields.text({ label: "Heading" }),
    testimonials: fields.array(
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
export const locallyOwnedBusiness ={
 label: "Locally Owned Business",
 schema: fields.object({
  pretitle: fields.text({label: "Pre Title"}),
  title: fields.text({label: "Section Title"}),
  card: fields.object({
    title: fields.text({label: "Title"}),
    description: fields.text({label: "Description"}),
    image: fields.image({
      label: "Card Image",
      directory: "/public/images/",
      publicPath: "/images",
    }),
  }),
  banner: fields.object({
    title: fields.text({label: "Banner Title"}),
    button: fields.object({
      label: fields.text({label: "Button Label"}),
      link: fields.text({label: "Button Link"})
    })
    
  })
  })
}
export const subServiceCards ={
  label: "Sub Service Cards",
  schema: fields.object({
    cards: fields.array(
      fields.object({
        title: fields.text({label: "Card Title"}),
        description: fields.text({label: "Card Description"}),
        image: fields.image({
          label: "Card Image",
          directory: "/public/images/",
          publicPath: "/images",
        }),
        link: fields.text({label: "Link"})
      }),
      {
        label: "Sub Service Card",
        itemLabel: (props) => props.fields.title.value,
      }
    )
  })
}
export const twoColumnWithTitle ={
  label: "Two Column Section With Title",
  schema: fields.object({
    pretitle: fields.text({label: "Pre Title"}),
    title: fields.text({label: "Title"}),
    cards: fields.array(
      fields.object({
        title: fields.text({label: "Card Title"}),
        description: fields.markdoc.inline({label: "Card Description"}),
        image: fields.image({
          label: "Card Image",
          directory: "/public/images/",
          publicPath: "/images",
        }),
      }),
      {
        label: "Two Column Section With Title",
        itemLabel: (props) => props.fields.title.value,
      }
    )
  })
}
export const serviceGallery = {
  label: "Service Gallery",
  schema: fields.object({
    featuredImage: fields.image({
      label: "Featured Image",
      directory: "/public/images/",
      publicPath: "/images",
    }),
    galleryImages: fields.array(
      fields.image({
        label: "Gallery Image",
        directory: "/public/images/",
        publicPath: "/images",
      })
    )
  })
}

export const heroWithBanner = {
  label: "Hero With Banner",
  schema: fields.object({
    title: fields.text({ label: "Title" }),
    subtitle: fields.text({ label: "Subtitle" }),
    bgImage: fields.image({
      label: "Hero background image",
      directory: "/public/images/",
      publicPath: "/images/",
    }),
    banner: fields.object({
      title: fields.text({ label: "Banner Title" }),
      button: fields.object({
        label: fields.text({ label: "Button Label" }),
        link: fields.text({ label: "Button Link" }),
      }),
    }),
  }),
  
};