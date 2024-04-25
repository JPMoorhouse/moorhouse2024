// keystatic.config.ts
import { config, fields, collection, singleton } from "@keystatic/core" 
import {
  aboutmoorhouse,
  HomeHero,
  Testimonials,
  WhatToExpect,
  WhatWeOffer,
  Gallerys,
  industrialPainting,
  FrequentlyAskedQuestions
} from "./src/blocks";

export default config({
  storage: {
    kind: "cloud",
  },
  cloud: {
    project: "moorhouse/moorhouse2024",
  },
  collections: {
    Pages: collection({
      label: "Pages",
      slugField: "title",
      path: "src/content/pages/*",
      schema: {
        title: fields.slug({
          name: {
            label: "Page Title",
          },
        }),
        seoData: fields.object({
          seoTitle: fields.text({ label: "SEO Title" }),
          seoDesription: fields.text({ label: "SEO Description" }),
          ogImage: fields.image({
            label: "Open Graph Image",
            directory: "/public/images/seo/",
            publicPath: "/images/seo/",
          }),
        }),

        blocks: fields.blocks(
          {
            Hero: HomeHero,
            aboutmoorhouse: aboutmoorhouse,
            WhatWeOffer: WhatWeOffer,
            Gallerys: Gallerys,
            WhatToExpect: WhatToExpect,
            industrialPainting: industrialPainting,
            FrequentlyAskedQuestions: FrequentlyAskedQuestions,
            Testimonials: Testimonials,
          },
          { label: "Blocks" }
        ),
      },
    }),
  },
  singletons: {
    header: singleton({
      label: "Navigation",
      path: "src/content/navigation/",
      schema: {
        logo: fields.image({
          label: "Company Logo",
          directory: "/public/images/",
          publicPath: "/images",
        }),
        navItems: fields.array(
          fields.object({
            label: fields.text({
              label: "Label",
            }),
            link: fields.url({
              label: "Link",
            }),
          }),
          {
            label: "Navigation Items",
            description: "E.g. Home, About, etc.",
            itemLabel: (props) => props.fields.label.value,
          }
        ),
        button: fields.array(
          fields.object({
            buttontext: fields.text({ label: "Button Text" }),
            buttonSlug: fields.text({ label: "Button Slug" }),
          }),
          {
            label: "Seperate Us Button",
            itemLabel: (props) => props.fields.buttontext.value,
          }
        ),
      },
    }),
    topbar: singleton({
      label: "Topbar",
      path: "src/content/topbar/",
      schema: {
        message: fields.object({
          icon: fields.image({
            label: "messgae icon",
            directory: "/public/images/",
            publicPath: "/images",
          }),
          email: fields.text({ label: "Email" }),
        }),
        social: fields.array(
          fields.object({
            icontext: fields.text({ label: "" }),
            image: fields.image({
              label: "social icon",
              directory: "/public/images/",
              publicPath: "/images",
            }),
            link: fields.url({
              label: "social link",
            }),
          }),
          {
            label: "Seperate Us Button",
            itemLabel: (props) => props.fields.icontext.value,
          }
        ),
      },
    }),
    footer: singleton({
      label: "footer",
      path: "src/content/footer/",
      schema: {
        pretitle: fields.text({ label: "pretitle" }),
        heading: fields.text({ label: "heading" }),

        logo: fields.image({
          label: "Company Logo",
          directory: "/public/images/",
          publicPath: "/images",
        }),
        bedge: fields.image({
          label: "Bedge Logo",
          directory: "/public/images/",
          publicPath: "/images",
        }),
        Sitemap: fields.array(
          fields.object({
            label: fields.text({
              label: "Label",
            }),
            link: fields.url({
              label: "Link",
            }),
          }),
          {
            label: "Sitemap",
            description: "E.g. Home, About, etc.",
            itemLabel: (props) => props.fields.label.value,
          }
        ),
        OurServices: fields.array(
          fields.object({
            label: fields.text({
              label: "Label",
            }),
            link: fields.url({
              label: "Link",
            }),
          }),
          {
            label: "Our Services",
            description: "E.g. other services, Exterior Painting, etc.",
            itemLabel: (props) => props.fields.label.value,
          }
        ),
        OpeningHours: fields.object({
          openHours: fields.text({ label: "Opening & closing hours" }),
          openDays: fields.text({ label: "Opening & closing days" }),
          Button: fields.object({
            label: fields.text({ label: "Button" }),
            url: fields.text({ label: "Button Slug" }),
          }),
        }),
        locations: fields.object({
          title: fields.text({ label: "Locations title" }),
          location: fields.array(
            fields.object({
              label: fields.text({ label: "Label" }),
              link: fields.text({ label: "Link" }),
            }),
            {
              label: "Our locations",
              description: "E.g. other services, Exterior Painting, etc.",
              itemLabel: (props) => props.fields.label.value,
            }
          ),
        }),
        otherlinks: fields.array(
          fields.object({
            label: fields.text({ label: "Label" }),
            link: fields.text({ label: "Link" }),
          }),
          {
            label: "Privacy Links",
            description: "E.g. Privacy, Cookie, etc.",
            itemLabel: (props) => props.fields.label.value,
          }
        ),
      },
    }),
  },
});
