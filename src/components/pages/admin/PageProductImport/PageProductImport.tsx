import API_PATHS from "~/constants/apiPaths";
import ProductsTable from "~/components/pages/admin/PageProductImport/components/ProductsTable";
import CSVFileImport from "~/components/pages/admin/PageProductImport/components/CSVFileImport";
import Box from "@mui/material/Box";

export default function PageProductImport() {
  return (
    <Box py={3}>
      <Box mb={2} display="flex" justifyContent="space-between">
        <CSVFileImport
          url={`${API_PATHS.import}import`}
          title="Import Products CSV"
        />
      </Box>
      <ProductsTable />
    </Box>
  );
}
