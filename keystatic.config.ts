// keystatic.config.ts
import { config, fields, collection, singleton } from "@keystatic/core";
import {
  twoColumn,
  hero,
  testimonials,
  whatToExpect,
  whatWeOffer,
  gallery,
  industrialPainting,
  frequentlyAskedQuestions,
  aboutmoorhouse,
  locallyOwnedBusiness,
  subServiceCards,
  twoColumnWithTitle,
  sectionTitleDescription,
  gridGallery,
  heroWithBanner,
  coreValues,
  servingSouthwest,
  projectCardsWithCategory,
  paintingProcess,
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
            hero,
            heroWithBanner,
            aboutmoorhouse,
            twoColumn,
            sectionTitleDescription,
            whatWeOffer,
            gallery,
            projectCardsWithCategory,
            locallyOwnedBusiness,
            whatToExpect,
            industrialPainting,
            frequentlyAskedQuestions,
            testimonials,
            coreValues,
            servingSouthwest,
          },
          { label: "Blocks" }
        ),
      },
    }),
    locations: collection({
      label: "Locations",
      slugField: "title",
      path: "src/content/locations/*",
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
            hero,
            aboutmoorhouse,
            twoColumn,
            whatWeOffer,
            gallery,
            whatToExpect,
            locallyOwnedBusiness,
            industrialPainting,
            frequentlyAskedQuestions,
            testimonials,
            coreValues,
            servingSouthwest,
          },
          { label: "Blocks" }
        ),
      },
    }),
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "src/content/projects/*",
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
            sectionTitleDescription,
            gridGallery,
            industrialPainting,
            gallery,
            testimonials,
            coreValues,
            servingSouthwest,
          },
          { label: "Blocks" }
        ),
      },
    }),
    serviceCategory: collection({
      label: "Service Category Pages",
      slugField: "title",
      path: "src/content/service-category/**",
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
        subService: fields.array(
          fields.relationship({
            label: "Sub Service",
            description: "A list of sub service for this Category",
            collection: "subServices",
          }),
          {
            label: "Sub Service",
          }
        ),
        blocks: fields.blocks(
          {
            twoColumnWithTitle,
            subServiceCards,
            gallery,
            industrialPainting,
            frequentlyAskedQuestions,
            testimonials,
            coreValues,
            servingSouthwest,
            paintingProcess,
          },
          { label: "Blocks" }
        ),
      },
    }),
    subServices: collection({
      label: "Sub Services",
      slugField: "title",
      path: "src/content/sub-services/*",
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
            sectionTitleDescription,
            gridGallery,
            industrialPainting,
            gallery,
            testimonials,
            coreValues,
            servingSouthwest,
            paintingProcess,
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
        button: fields.object({
          buttontext: fields.text({ label: "Button Text" }),
          buttonSlug: fields.text({ label: "Button Slug" }),
        }),
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
