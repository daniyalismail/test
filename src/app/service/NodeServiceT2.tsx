export const NodeServiceT2 = {
  getTreeNodes() {
    return Promise.resolve([
      {
        key: "0",
        label: "Video interview questions",
        type: "withAvatar", // 👈 flag for avatar node
        children: [
          {
            key: "0-0",
            label: "Work",
            data: "Work Folder",
            icon: "pi pi-fw pi-cog",
            children: [
              {
                key: "0-0-0",
                label: "Expenses.doc",
                icon: "pi pi-fw pi-file",
                data: "Expenses Document",
              },
              {
                key: "0-0-1",
                label: "Resume.doc",
                icon: "pi pi-fw pi-file",
                data: "Resume Document",
              },
            ],
          },
        ],
      },
    ]);
  },
};
