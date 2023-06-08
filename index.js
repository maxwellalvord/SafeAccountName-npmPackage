export const CheckName = (name) => {
  const start = performance.now();
  const wordList = ["antidisestablishmentarianism", ".adSensepostnottherenonobook", "actSensepostnottherenonotive", "acunetix-wvs-test-for-some-inexistent-file", "appscan_fingerprint/mac_address", "arachni-", "cybercop", "nessus_is_probing_you_", "nessustest", "netsparker-", "rfiinc.txt", "thereisnowaythat-you-canbethere", "w3af/remotefileinclude.html", "appscan_fingerprint", "w00tw00t.at.ISC.SANS.DFind", "w00tw00t.at.blackhats.romanian.anti-sec"]
  if (typeof name !== 'string') {
    let stringName = name.toString();
    
    // if (wordList.includes(stringName)) {
    //   throw Error("Sorry that name has been blocked by the server host");
    // }
    
    switch(stringName) {
      case "antidisestablishmentarianism":
        throw Error("Sorry that name has been blocked by the server host");
      case ".adSensepostnottherenonobook":
        throw Error("Sorry that name has been blocked by the server host");
      case "<invalid>hello.html":
        throw Error("Sorry that name has been blocked by the server host");
      case "actSensepostnottherenonotive":
        throw Error("Sorry that name has been blocked by the server host");
      case "acunetix-wvs-test-for-some-inexistent-file":
        throw Error("Sorry that name has been blocked by the server host");
      case "appscan_fingerprint/mac_address":
        throw Error("Sorry that name has been blocked by the server host");
      case "arachni-":
        throw Error("Sorry that name has been blocked by the server host");
      case "cybercop":
        throw Error("Sorry that name has been blocked by the server host");
      case "nessus_is_probing_you_":
        throw Error("Sorry that name has been blocked by the server host");
      case "nessustest":
        throw Error("Sorry that name has been blocked by the server host");
      case "netsparker-":
        throw Error("Sorry that name has been blocked by the server host");
      case "rfiinc.txt":
        throw Error("Sorry that name has been blocked by the server host");
      case "thereisnowaythat-you-canbethere":
        throw Error("Sorry that name has been blocked by the server host");
      case "w3af/remotefileinclude.html":
        throw Error("Sorry that name has been blocked by the server host");
      case "appscan_fingerprint":
        throw Error("Sorry that name has been blocked by the server host");
      case "w00tw00t.at.ISC.SANS.DFind":
        throw Error("Sorry that name has been blocked by the server host");
      case "w00tw00t.at.blackhats.romanian.anti-sec":
        throw Error("Sorry that name has been blocked by the server host");
      default:
        console.log("success");
    }
  } else {
    let stringName = name;

    // if (wordList.includes(stringName)) {
    //   console.log("Sorry that name has been blocked by the server host");
    // }

    switch(stringName) {
      case "antidisestablishmentarianism":
        throw Error("Sorry that name has been blocked by the server host");
      case ".adSensepostnottherenonobook":
        throw Error("Sorry that name has been blocked by the server host");
      case "<invalid>hello.html":
        throw Error("Sorry that name has been blocked by the server host");
      case "actSensepostnottherenonotive":
        throw Error("Sorry that name has been blocked by the server host");
      case "acunetix-wvs-test-for-some-inexistent-file":
        throw Error("Sorry that name has been blocked by the server host");
      case "appscan_fingerprint/mac_address":
        throw Error("Sorry that name has been blocked by the server host");
      case "arachni-":
        throw Error("Sorry that name has been blocked by the server host");
      case "cybercop":
        console.log("Sorry that name has been blocked by the server host");
        break;
        case "nessus_is_probing_you_":
        throw Error("Sorry that name has been blocked by the server host");
      case "nessustest":
        throw Error("Sorry that name has been blocked by the server host");
      case "netsparker-":
        throw Error("Sorry that name has been blocked by the server host");
      case "rfiinc.txt":
        throw Error("Sorry that name has been blocked by the server host");
      case "thereisnowaythat-you-canbethere":
        throw Error("Sorry that name has been blocked by the server host");
      case "w3af/remotefileinclude.html":
        throw Error("Sorry that name has been blocked by the server host");
      case "appscan_fingerprint":
        throw Error("Sorry that name has been blocked by the server host");
      case "w00tw00t.at.ISC.SANS.DFind":
        throw Error("Sorry that name has been blocked by the server host");
      case "w00tw00t.at.blackhats.romanian.anti-sec":
        throw Error("Sorry that name has been blocked by the server host");
      default:
        console.log("success");
    }
    
  }
  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);
}
// testing possible regex solutions to check for hidden words
// console.log("regex test:","hellomom".match(/mom/));

// CheckName("cyber");
CheckName("cybercop");
// CheckName("cyber");

