import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
	// `dts` has to be set to false because otherwise I get:
	// [plugin rolldown-plugin-dts:generate]
	// TypeError: Cannot read properties of undefined (reading 'useCaseSensitiveFileNames')
	//
	// But that's a separate issue.
    dts: false,
    exports: true,
    loader: {
      ".txt": "text",
    },
  },
  fmt: {},
});
