(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{419:function(e,t,o){"use strict";o.r(t);var a=o(3),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"zowe-lifecycle"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#zowe-lifecycle"}},[e._v("#")]),e._v(" Zowe lifecycle")]),e._v(" "),o("p",[e._v("This topic describes the lifecycle of Zowe core components and how an offering that provides a Zowe extension can set up lifecycle for their component.")]),e._v(" "),o("p",[e._v("The Zowe UNIX System Services (USS) components are run as part of the started task "),o("code",[e._v("ZWESVSTC")]),e._v(". For more information, see "),o("router-link",{attrs:{to:"/user-guide/configure-zowe-server.html#option-1-starting-zowe-from-a-uss-shell"}},[e._v("Starting Zowe from a USS shell")]),e._v(". There are two key USS directories that play different roles when launching Zowe.")],1),e._v(" "),o("ul",[o("li",[o("p",[e._v("The Zowe runtime directory "),o("code",[e._v("<RUNTIME_DIR>")]),e._v(" that contains the executable files is an immutable set of directories and files that are replaced each time a new release is applied.  The initial release or an upgrade is installed either with UNIX shell scripts (see "),o("router-link",{attrs:{to:"/user-guide/install-zowe-zos-convenience-build.html"}},[e._v("Installing Zowe runtime from a convenience build")]),e._v("), or SMP/E where the runtime directory is laid down initially as FMID AZWE001 and then upgraded through rollup PTF builds (see "),o("router-link",{attrs:{to:"/user-guide/install-zowe-smpe.html"}},[e._v("Installing Zowe SMP/E")]),e._v(").  The Zowe runtime directory is not altered during operation of Zowe, so no data is written to it and no customization is performed on its contents.")],1)]),e._v(" "),o("li",[o("p",[e._v("The Zowe instance directory "),o("code",[e._v("<INSTANCE_DIR>")]),e._v(" contains information that is specific to a launch of Zowe.  It contains configuration settings that determine how an instance of the Zowe server is started, such as ports that are used or paths to dependent Java and Node.js runtimes.  The instance directory also contains log directory where different 'microservices' write trace data for diagnosis, as well as a workspace and shell scripts to start and stop Zowe.  More than one Zowe instance directory can be created to allow multiple launches of a Zowe runtime, each one isolated from each other and starting Zowe depending on how the instance directory has been configured. For more information, see "),o("router-link",{attrs:{to:"/user-guide/configure-instance-directory.html"}},[e._v("Creating and configuring the Zowe instance directory")]),e._v(".")],1)])]),e._v(" "),o("p",[e._v("To start Zowe, the script "),o("code",[e._v("<INSTANCE_DIR>/bin/zowe-start.sh")]),e._v(" is run from a USS shell.  This uses a REXX program to launch the started task "),o("code",[e._v("ZWESVSTC")]),e._v(", passing the instance directory path as a parameter.  It is the equivalent of using the TSO command "),o("code",[e._v("/S ZWESVSTC,INSTANCE='<INSTANCE_DIR>',JOBNAME='<JOBNAME>'")]),e._v(".  The "),o("code",[e._v("ZWESVSTC")]),e._v(" PROCLIB uses the program that creates a USS process and starts the script "),o("code",[e._v("<INSTANCE_DIR>/bin/internal/run-zowe.sh")]),e._v(".  By using "),o("code",[e._v("BPXATSL")]),e._v(" to start the USS process, all of the address spaces started under this shell are managed by SDSF.  If the "),o("code",[e._v("zowe-start.sh")]),e._v(" run "),o("code",[e._v("run-zowe.sh")]),e._v(" directly, the USS processes will not run as a started task and will run under the user ID of whoever ran the "),o("code",[e._v("run-zowe.sh")]),e._v(" script rather than the Zowe user ID of "),o("code",[e._v("ZWESVUSR")]),e._v(", likely leading to permission errors accessing the contents of the "),o("code",[e._v("<RUNTIME_DIR>")]),e._v(" as well as the Zowe certificate. For these reasons, the "),o("code",[e._v("zowe-start.sh")]),e._v(" script launches Zowe's USS process beneath the started task "),o("code",[e._v("ZWESVSTC")]),e._v(".")]),e._v(" "),o("p",[e._v("When "),o("code",[e._v("run-zowe.sh")]),e._v(" is run in the USS shell that "),o("code",[e._v("BPXBATSL")]),e._v(" creates, it executes the file "),o("code",[e._v("<INSTANCE_DIR>/instance.env")]),e._v(".  This file sets a number of shell variables, such as "),o("code",[e._v("ROOT_DIR")]),e._v(" that points to the directory with the "),o("code",[e._v("<RUNTIME_DIR>")]),e._v(", variables for all of the ports used by the Zowe components, and other configuration data. For more information, see "),o("router-link",{attrs:{to:"/user-guide/configure-instance-directory.html#reviewing-the-instance.env-file"}},[e._v("Reviewing the instance.env file")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"zowe-components"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#zowe-components"}},[e._v("#")]),e._v(" Zowe components")]),e._v(" "),o("p",[e._v("Zowe consists of a series of 'microservices' or components.  Each component is its own USS directory, which contains its executable files. Within each component's USS directory, a "),o("code",[e._v("bin")]),e._v(" directory contains scripts that are used for the lifecycle of the component.  When Zowe is started, it identifies the components that are configured to launch and then execute the scripts of those components in the cycle of "),o("a",{attrs:{href:"#validate"}},[e._v("validate")]),e._v(", "),o("a",{attrs:{href:"#configure"}},[e._v("configure")]),e._v(", and "),o("a",{attrs:{href:"#start"}},[e._v("start")]),e._v(".  All components are validated, then all are configured, and finally all are started.  This technique is used as follows:")]),e._v(" "),o("ul",[o("li",[e._v("Used for the base Zowe components that are included with the core Zowe runtime.")]),e._v(" "),o("li",[e._v("Applies to extensions to allow vendor offerings to be able to have the lifecycle of their 'microservices' within the Zowe USS shell and be included as address spaces under the "),o("code",[e._v("ZWESVSTC")]),e._v(" started task.")])]),e._v(" "),o("h3",{attrs:{id:"validate"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#validate"}},[e._v("#")]),e._v(" Validate")]),e._v(" "),o("p",[e._v("Each component is asked to validate itself with a call to its "),o("code",[e._v("/bin/validate.sh")]),e._v(" script.  This script is optional.")]),e._v(" "),o("p",[e._v("If present, the "),o("code",[e._v("validate.sh")]),e._v(" script performs tasks such as:")]),e._v(" "),o("ul",[o("li",[e._v("Check that the shell has the correct prerequisites.")]),e._v(" "),o("li",[e._v("Validate that ports are available.")]),e._v(" "),o("li",[e._v("Perform other steps to ensure that the component is able to be launched successfully.")])]),e._v(" "),o("p",[e._v("During execution of the "),o("code",[e._v("validate.sh")]),e._v(" script, if an error is detected, then a component should echo a message that contains information to assist a user diagnosing the problem.")]),e._v(" "),o("p",[e._v("If you are a Zowe administrator, you might want to check whether all the component validation checks of the Zowe installation pass without starting any of the components. To do this, you can add "),o("code",[e._v("VALIDATE_ONLY=true")]),e._v(" to the "),o("code",[e._v("instance.env")]),e._v(" file. Then, Zowe will not be launched after the validation stage.")]),e._v(" "),o("h3",{attrs:{id:"configure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure"}},[e._v("#")]),e._v(" Configure")]),e._v(" "),o("p",[e._v("Each component is asked to configure itself with a call to its "),o("code",[e._v("/bin/configure.sh")]),e._v(" script.  This script is optional.")]),e._v(" "),o("p",[e._v("An example configuration step is if a component wants to install applications into the Zowe desktop as iframes, or add API endpoints statically into the API Mediation Layer.  Because a component's "),o("code",[e._v("configure.sh")]),e._v(" script is run inside the USS shell that the "),o("code",[e._v("instance.env")]),e._v(" has initialized, it will have all of the shell variables for prerequisites set, so the configure step can be used to query these in order to prepare the component ready for launch.")]),e._v(" "),o("h3",{attrs:{id:"start"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#start"}},[e._v("#")]),e._v(" Start")]),e._v(" "),o("p",[e._v("Each component is asked to start itself with a call to its "),o("code",[e._v("/bin/start.sh")]),e._v(" script.  This script is mandatory because without it, the component will not be launched.")]),e._v(" "),o("p",[e._v("It is up to each component to start itself based on how it has been written.  We recommend that any variables that someone who configure Zowe may need to vary, such as timeout values, port numbers, or similar, are specified as variables in the "),o("code",[e._v("instance.env")]),e._v(" file and then referenced as shell variables in the "),o("code",[e._v("start.sh")]),e._v(" script to be passed into the component runtime.")]),e._v(" "),o("h2",{attrs:{id:"zowe-core-components"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#zowe-core-components"}},[e._v("#")]),e._v(" Zowe core components")]),e._v(" "),o("p",[e._v("The Zowe runtime directory delivers its 'microservices' as components that follow the lifecycle of validate, configure, and start.  To understand the type of steps that these scripts perform, you can look at the "),o("code",[e._v("<RUNTIME_DIR>/components/")]),e._v(" directory. For each of the base Zowe components, look at their "),o("code",[e._v("/bin")]),e._v(" directories and the scripts they contain.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("<RUNTIME_DIR>/components/\n  /api-mediation\n  /app-server\n  /explorer-jes\n  /explorer-mvs\n  /files-api\n  /jobs-api\n")])])]),o("p",[o("strong",[e._v("Note:")])]),e._v(" "),o("p",[e._v("The scripts of core Zowe components use the helper library "),o("code",[e._v("<RUNTIME_DIR>/scripts/utils")]),e._v(".  Currently, these are not publicly supported. Future releases of Zowe might provide these as supported system programming interfaces (SPIs) and include their usage in the Zowe documentation.")]),e._v(" "),o("h2",{attrs:{id:"zowe-extensions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#zowe-extensions"}},[e._v("#")]),e._v(" Zowe extensions")]),e._v(" "),o("p",[e._v("If you want to set up a lifecycle for your Zowe extension, you must provide your own directory that contains your Zowe lifecycle scripts "),o("code",[e._v("start.sh")]),e._v(", and optionally "),o("code",[e._v("validate.sh")]),e._v(" and "),o("code",[e._v("configure.sh")]),e._v(".")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("instance.env")]),e._v(" file in the "),o("code",[e._v("<INSTANCE_DIR>")]),e._v(" used to launch Zowe contains the variable "),o("code",[e._v("EXTENDER_COMPNENTS")]),e._v(" whose value is a semi-colon separated list of fully qualified directory paths that contain extender lifecycle scripts.")]),e._v(" "),o("p",[o("strong",[e._v("Example:")])]),e._v(" "),o("p",[e._v("Vendor MYVENDOR has a product MYAPP that installs into "),o("code",[e._v("/usr/lpp/myvendor/myapp")]),e._v(".  This product is a Zowe extension so they want it to be started and stopped with Zowe and run as an address space under the "),o("code",[e._v("ZWESVSTC")]),e._v(" in the Zowe USS shell.")]),e._v(" "),o("p",[e._v("The script "),o("code",[e._v("/usr/lpp/myvendor/myapp/zowe/validate.sh")]),e._v(" checks that the environment has been configured correctly and the script "),o("code",[e._v("/usr/lpp/myvendor/myapp/zowe/start.sh")]),e._v(" starts the vendor application.")]),e._v(" "),o("p",[e._v("The installation documentation for MYAPP instructs the system programmer to update the "),o("code",[e._v("instance.env")]),e._v(" file and update the "),o("code",[e._v("EXTENDER_COMPONENTS")]),e._v(" variable to point to the fully qualified path of the directory that contains the Zowe lifecycle scripts.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("EXTENDER_COMPONENTS='/usr/lpp/myvendor/myapp/zowe'\n")])])]),o("p",[e._v("When the Zowe instance is launched by running "),o("code",[e._v("<INSTANCE_DIR>/bin/zowe-start.sh")]),e._v(", this will call the "),o("code",[e._v("/usr/lpp/myvendor/myapp/zowe/start.sh")]),e._v(" script and the started task will create an address space under "),o("code",[e._v("ZWESVSTC")]),e._v(" for the vendor component.  When the Zowe instance is stopped, the address space is terminated.")]),e._v(" "),o("h2",{attrs:{id:"sample-extensions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sample-extensions"}},[e._v("#")]),e._v(" Sample extensions")]),e._v(" "),o("h3",{attrs:{id:"sample-zowe-api-extension"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sample-zowe-api-extension"}},[e._v("#")]),e._v(" Sample Zowe API extension")]),e._v(" "),o("p",[e._v("The repository "),o("a",{attrs:{href:"https://github.com/zowe/sample-node-api",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/zowe/sample-node-api"),o("OutboundLink")],1),e._v(" contains a sample Zowe extension with a node server providing sample APIs for looking at cars in a dealership. For more information, see "),o("a",{attrs:{href:"https://github.com/zowe/sample-node-api/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("sample-node-api"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://github.com/zowe/sample-node-api/blob/master/bin/configure.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("configure.sh"),o("OutboundLink")],1),e._v(" script statically registers the API into the API Mediation Layer as well as a tile that includes the Swagger definitions into the API Catalog.")]),e._v(" "),o("h3",{attrs:{id:"sample-zowe-desktop-and-api-catalog-extension"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sample-zowe-desktop-and-api-catalog-extension"}},[e._v("#")]),e._v(" Sample Zowe Desktop and API Catalog extension")]),e._v(" "),o("p",[e._v("The repository "),o("a",{attrs:{href:"https://github.com/zowe/sample-trial-app",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/zowe/sample-trial-app"),o("OutboundLink")],1),e._v(" contains a sample Zowe extension with a node server providing a web page that gives a user interface to the APIs included with the API sample above.")]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://github.com/zowe/sample-trial-app/blob/master/bin/configure.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("configure.sh"),o("OutboundLink")],1),e._v(" script installs a web page into the Zowe Desktop by using the utility script "),o("code",[e._v("<RUNTIME_DIR>/bin/utils/zowe-install-iframe-plugin.sh")]),e._v(".  The "),o("a",{attrs:{href:"https://github.com/zowe/sample-trial-app/blob/master/bin/configure.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("configure.sh"),o("OutboundLink")],1),e._v(" script also installs a tile into the API Mediation Layer's API Catalog.")])])}),[],!1,null,null,null);t.default=s.exports}}]);