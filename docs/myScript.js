function waitForElm(selector) {
	return new Promise(resolve => {
		if (document.querySelector(selector)) {
			return resolve(document.querySelector(selector));
		}

		const observer = new MutationObserver(mutations => {
			if (document.querySelector(selector)) {
				resolve(document.querySelector(selector));
				observer.disconnect();
			}
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
	});
}
// Show the dev portal widget 
function showWidget() {
	APIMaticDevPortal.show(
		{
			"container": "apimatic-widget",
			"portalStyle": "default",
			"codegenApiRoutes": {
				"docsgen": "/api/api-entities/LLHlm5iwn7cxhbKpEHxF0N3gQNGYmzflcS5kryfaX72d6o2xbidiVQbqcp2bNcDq/portal-artifacts/docs/generated-file?template={template}",
				"codegen": "/api/api-entities/LLHlm5iwn7cxhbKpEHxF0N3gQNGYmzflcS5kryfaX72d6o2xbidiVQbqcp2bNcDq/portal-artifacts/sdks/generated-file?template={template}",
				"transform": "/api/api-entities/LLHlm5iwn7cxhbKpEHxF0N3gQNGYmzflcS5kryfaX72d6o2xbidiVQbqcp2bNcDq/portal-artifacts/specs/generated-file?format={format}",
				"apiProxy": "https://proxy.apimatic.io/api/proxy"
			},
			"apiKey": "PkUYNyvjYA7DfFBwoKTjTDVXNjfG0ARc59qXFAwZ3srPAdRKCufvzvx8RAGPLywmXNrzQHZa6c1O52sK2RI_oQ**",
			"baseUrl": "https://www.apimatic.io",
			"enableExport": true,
			"renameHttpToRest": false,
			"enableConsoleCalls": true,
			"useProxyForConsoleCalls": true,
			"initialPlatform": "http_curl_v1",
			"languageSettings": {
				"http_curl_v1": {
					"disableSdkDownload": true
				},
				"cs_net_standard_lib": {
					"disableSdkDownload": false,
					"sdkDownloadLink": ""
				},
				"java_eclipse_jre_lib": {
					"disableSdkDownload": false,
					"sdkDownloadLink": ""
				},
				"php_generic_lib_v2": {
					"disableSdkDownload": false,
					"sdkDownloadLink": ""
				},
				"python_generic_lib": {
					"disableSdkDownload": false,
					"sdkDownloadLink": ""
				},
				"ruby_generic_lib": {
					"disableSdkDownload": false,
					"sdkDownloadLink": ""
				},
				"ts_generic_lib": {
					"disableSdkDownload": false,
					"sdkDownloadLink": ""
				}
			},
			"allowedExportFormats": [
				"postman10",
				"postman20",
				"openapi31json",
				"openapi31yaml",
				"openapi3json",
				"openapi3yaml",
				"swagger20",
				"swaggeryaml",
				"swagger10",
				"raml",
				"raml10",
				"apiblueprint",
				"wadl2009",
				"apimatic",
				"wsdl",
				"insomnia",
				"insomniayaml"
			],
			"themeOverrides": {
				"themeType": "cool",
				"palette": {
					"primaryColor": "#05c2bc",
					"linkColor": "#00C7D4"
				},
				"fontSource": [
					"https://fonts.googleapis.com/css?family='Rubik':100,100i,300,300i,400,400i,500,500i,700,700i,900,900i",
					"https://fonts.googleapis.com/css?family=Courier+Prime:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
				],
				"cssStyles": {
					"headings": {
						"fontFamily": "'Rubik', sans-serif",
						"h1": {
							"fontFamily": "'Rubik', sans-serif",
							"fontSize": "27px",
							"fontWeight": "500",
							"fontStyle": "normal",
							"lineHeight": "1.3"
						},
						"h2": {
							"fontFamily": "'Rubik', sans-serif",
							"fontSize": "24px",
							"fontWeight": "500",
							"fontStyle": "normal",
							"lineHeight": "1.3"
						},
						"h3": {
							"fontFamily": "'Rubik', sans-serif",
							"fontSize": "21.36px",
							"fontWeight": "500",
							"fontStyle": "normal",
							"lineHeight": "1.3"
						},
						"h4": {
							"fontFamily": "'Rubik', sans-serif",
							"fontSize": "18px",
							"fontWeight": "500",
							"fontStyle": "normal",
							"lineHeight": "1.3"
						},
						"h5": {
							"fontFamily": "'Rubik', sans-serif",
							"fontSize": "16px",
							"fontWeight": "500",
							"fontStyle": "normal",
							"lineHeight": "1.3"
						},
						"h6": {
							"fontFamily": "'Rubik', sans-serif",
							"fontSize": "15px",
							"fontWeight": "500",
							"fontStyle": "normal",
							"lineHeight": "1.3"
						}
					},
					"body": {
						"fontFamily": "'Rubik', sans-serif",
						"text1": {
							"fontFamily": "'Rubik', sans-serif",
							"fontSize": "15px",
							"fontWeight": "400",
							"fontStyle": "normal",
							"lineHeight": "1.75"
						},
						"text2": {
							"fontFamily": "'Rubik', sans-serif",
							"fontSize": "13.33px",
							"fontWeight": "400",
							"fontStyle": "normal",
							"lineHeight": "1.75"
						},
						"text3": {
							"fontFamily": "'Rubik', sans-serif",
							"fontSize": "11.85px",
							"fontWeight": "400",
							"fontStyle": "normal",
							"lineHeight": "1.75"
						}
					},
					"code": {
						"fontFamily": "Courier Prime, monospace",
						"blockCode": {
							"fontFamily": "Courier Prime, monospace",
							"fontSize": "15px",
							"fontWeight": "400",
							"fontStyle": "normal",
							"lineHeight": "1.75"
						},
						"inlineCode": {
							"fontFamily": "Courier Prime, monospace",
							"fontSize": "15px",
							"fontWeight": "400",
							"fontStyle": "normal",
							"lineHeight": "1.75"
						}
					}
				}
			}
		}
	);
};

const scriptUrl = "https://dxjs.apimatic.io/v7/static/js/portal.v7.js";
const script = document.createElement("script");
script.src = scriptUrl;

// Once the script is loaded, show the dev portal widget
script.onload = () => {            
   showWidget();
};
document.head.appendChild(script);

const portalButton = document.querySelector(
	  "header > div:nth-child(1) > div > div:nth-child(2) > a:nth-child(3)"
);

portalButton.addEventListener("click", () => waitForElm('#apimatic-widget').then(() => showWidget()));
