import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { ShowHideAction, ShowHideContent } from "./components/ShowHide";
import Portal from "./components/hoc/Portal";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "2dNzUfF2WQgc9J471ccfDa",
      token:
        "dySqQcCMjab4S4zuWN335nf8k93PEUiZe5J111aO7P4ck1PfL5ZHBqw1PhJe0t4p2sl7SN6SSGvQKOhdPwI2sA",
    },
  ],

  preview: true,
});

PLASMIC.registerComponent(ShowHideAction, {
  name: "ShowHideAction",
  displayName: "Show/Hide Action",
  isAttachment: true,
  styleSections: false,
  props: {
    name: "string",
    children: {
      type: "slot",
      defaultValue: {
        type: "default-component",
        kind: "button",
        props: {
          children: {
            type: "text",
            value: "Some tab",
          },
        },
      },
    },
  },
  defaultStyles: {
    width: "hug",
  },
});

PLASMIC.registerComponent(ShowHideContent, {
  name: "ShowHideContent",
  displayName: "Show/Hide Content",
  isAttachment: true,
  styleSections: false,
  props: {
    name: "string",
    children: {
      type: "slot",
      defaultValue: {
        type: "vbox",
        children: {
          type: "text",
          value: "This is some content you can toggle visibility on",
        },
      },
    },
  },
});

PLASMIC.registerComponent(Portal, {
  name: "Portal",
  displayName: "Portal",
  isAttachment: true,
  styleSections: false,
  props: {
    children: {
      show: "string",
      type: "slot",
    },
  },
});
