import Poll_Table from "../components/DataTable/Poll_Table";

export const PollService = {
  getTreeNodes() {
    return Promise.resolve([
      {
        key: "0",
        label: "Poll",
        data: "Documents Folder",
        children: [
          {
            key: "0-0",
            label: <Poll_Table />,
            leaf: true,
          },
        ],
      },
    ]);
  },
};
