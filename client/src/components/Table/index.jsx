import * as React from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";

const Table = ({ nodes = [], columns = [], sort = {} }) => {
  const data = { nodes };
  const theme = useTheme(getTheme());

  return (
    <CompactTable columns={columns} data={data} theme={theme} sort={sort} />
  );
};

export default Table;
