(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{379:function(e,t,o){"use strict";o.r(t);var s=o(3),l=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"uninstalling-zowe-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#uninstalling-zowe-cli"}},[e._v("#")]),e._v(" Uninstalling Zowe CLI")]),e._v(" "),o("p",[e._v("You can uninstall Zowe™ CLI from the desktop if you no longer need to use it.")]),e._v(" "),o("p",[o("strong",[e._v("Important!")]),e._v(" The uninstall process does not delete the profiles and credentials that you created when using the product from your computer. To delete the profiles from your computer, delete them before you uninstall Zowe CLI.")]),e._v(" "),o("p",[e._v("The following steps describe how to list the profiles that you created, delete the profiles, and uninstall Zowe CLI.")]),e._v(" "),o("p",[o("strong",[e._v("Follow these steps:")])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Open a command-line window.")]),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" If you do not want to delete the Zowe CLI profiles from your computer, go to Step 5.")])]),e._v(" "),o("li",[o("p",[e._v("List all profiles that you created for a given command group. Issue the following command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v(" zowe profiles list <profileType>\n")])])]),o("p",[o("strong",[e._v("Example:")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ zowe profiles list zosmf\nThe following profiles were found for the module zosmf:\n'SMITH-123' (DEFAULT)\nsmith-123@SMITH-123-W7 C:\\Users\\SMITH-123\n$\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Delete all of the profiles that are listed for the command group by issuing the following command:")]),e._v(" "),o("p",[o("strong",[e._v("Tip:")]),e._v(" For this command, use the results of the "),o("code",[e._v("list")]),e._v("\ncommand.")]),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" When you issue the "),o("code",[e._v("delete")]),e._v(" command, it deletes the\nspecified profile and its credentials from the credential vault in your computer's operating system.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("zowe profiles delete <profileType> <profileName> --force\n")])])]),o("p",[o("strong",[e._v("Example:")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("zowe profiles delete zosmf SMITH-123 --force\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Repeat Steps 2 and 3 for all Zowe CLI command groups and profiles.")])]),e._v(" "),o("li",[o("p",[e._v("Uninstall Zowe CLI by issuing the following command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("npm uninstall --global @zowe/cli\n")])])]),o("p",[o("strong",[e._v("Note:")]),e._v(" You might recieve an "),o("code",[e._v("ENOENT")]),e._v(" error when issuing this command if you installed Zowe CLI from a local package (.tgz) and the package was moved from its original location. In the event that you recieve the error, open an issue in the Zowe CLI GitHub repository.")]),e._v(" "),o("p",[e._v("The uninstall process removes all Zowe CLI installation directories and files from your computer.")])]),e._v(" "),o("li",[o("p",[e._v("Delete the "),o("code",[e._v("~/.zowe")]),e._v("  or "),o("code",[e._v("%homepath%\\.zowe")]),e._v(" directory on your computer. The directory contains the Zowe CLI log files and other miscellaneous files that were generated when you used the product.")]),e._v(" "),o("p",[o("strong",[e._v("Tip:")]),e._v(" Deleting the directory does not harm your computer.")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);