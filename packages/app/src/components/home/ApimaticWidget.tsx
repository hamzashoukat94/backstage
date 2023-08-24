import React, { Component } from 'react';

class ApimaticWidget extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://dxjs.apimatic.io/v7/static/js/portal.v7.js';
    script.onload = this.initializeWidget;
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  initializeWidget = () => {
    APIMaticDevPortal.show({
      container: 'apimatic-widget',
      portalStyle: 'default',
      codegenApiRoutes: {
        docsgen:
          '/api/api-entities/hGGA-KFyqoktQ3Wn2fbPxLt729J4j_ZU7W82NuKZMFU6qg6brrEgrFmViFZ9UJ4O/portal-artifacts/docs/generated-file?template={template}',
        codegen:
          '/api/api-entities/hGGA-KFyqoktQ3Wn2fbPxLt729J4j_ZU7W82NuKZMFU6qg6brrEgrFmViFZ9UJ4O/portal-artifacts/sdks/generated-file?template={template}',
        transform:
          '/api/api-entities/hGGA-KFyqoktQ3Wn2fbPxLt729J4j_ZU7W82NuKZMFU6qg6brrEgrFmViFZ9UJ4O/portal-artifacts/specs/generated-file?format={format}',
        apiProxy: 'https://proxy.apimatic.io/api/proxy',
      },
      apiKey:
        'PkUYNyvjYA7DfFBwoKTjTAGTvuGRJjDMwTw8axTomFy1ljdvXUKqmougzzmxn6C7mYokTeSeiT2tU4uxfRgJqw**',
      baseUrl: 'https://www.apimatic.io',
      enableExport: true,
      renameHttpToRest: false,
      enableConsoleCalls: true,
      useProxyForConsoleCalls: true,
      initialPlatform: 'java_eclipse_jre_lib',
      languageSettings: {
        java_eclipse_jre_lib: {
          disableSdkDownload: false,
          sdkDownloadLink: '',
        },
        cs_net_standard_lib: {
          disableSdkDownload: false,
          sdkDownloadLink: '',
        },
        php_generic_lib_v2: {
          disableSdkDownload: false,
          sdkDownloadLink: '',
        },
        python_generic_lib: {
          disableSdkDownload: false,
          sdkDownloadLink: '',
        },
        ruby_generic_lib: {
          disableSdkDownload: false,
          sdkDownloadLink: '',
        },
        ts_generic_lib: {
          disableSdkDownload: false,
          sdkDownloadLink: '',
        },
        go_generic_lib: {
          disableSdkDownload: false,
          sdkDownloadLink: '',
        },
        http_curl_v1: {
          disableSdkDownload: true,
        },
      },
      allowedExportFormats: [
        'postman10',
        'postman20',
        'openapi31json',
        'openapi31yaml',
        'openapi3json',
        'openapi3yaml',
        'swagger20',
        'swaggeryaml',
        'swagger10',
        'raml',
        'raml10',
        'apiblueprint',
        'wadl2009',
        'apimatic',
        'wsdl',
        'insomnia',
        'insomniayaml',
      ],
      themeOverrides: {
        themeType: 'cool',
        palette: {
          primaryColor: '#0c7ff2',
          linkColor: '#00C7D4',
        },
        fontSource: [],
        cssStyles: {
          headings: {
            fontFamily: "'Rubik', sans-serif",
            h1: {
              fontFamily: "'Rubik', sans-serif",
              fontSize: '27px',
              fontWeight: '500',
              fontStyle: 'normal',
              lineHeight: '1.3',
            },
            h2: {
              fontFamily: "'Rubik', sans-serif",
              fontSize: '24px',
              fontWeight: '500',
              fontStyle: 'normal',
              lineHeight: '1.3',
            },
            h3: {
              fontFamily: "'Rubik', sans-serif",
              fontSize: '21.36px',
              fontWeight: '500',
              fontStyle: 'normal',
              lineHeight: '1.3',
            },
            h4: {
              fontFamily: "'Rubik', sans-serif",
              fontSize: '18px',
              fontWeight: '500',
              fontStyle: 'normal',
              lineHeight: '1.3',
            },
            h5: {
              fontFamily: "'Rubik', sans-serif",
              fontSize: '16px',
              fontWeight: '500',
              fontStyle: 'normal',
              lineHeight: '1.3',
            },
            h6: {
              fontFamily: "'Rubik', sans-serif",
              fontSize: '15px',
              fontWeight: '500',
              fontStyle: 'normal',
              lineHeight: '1.3',
            },
          },
          body: {
            fontFamily: "'Rubik', sans-serif",
            text1: {
              fontFamily: "'Rubik', sans-serif",
              fontSize: '15px',
              fontWeight: '400',
              fontStyle: 'normal',
              lineHeight: '1.75',
            },
            text2: {
              fontFamily: "'Rubik', sans-serif",
              fontSize: '13.33px',
              fontWeight: '400',
              fontStyle: 'normal',
              lineHeight: '1.75',
            },
            text3: {
              fontFamily: "'Rubik', sans-serif",
              fontSize: '11.85px',
              fontWeight: '400',
              fontStyle: 'normal',
              lineHeight: '1.75',
            },
          },
          code: {
            fontFamily: 'Courier Prime, monospace',
            blockCode: {
              fontFamily: 'Courier Prime, monospace',
              fontSize: '15px',
              fontWeight: '400',
              fontStyle: 'normal',
              lineHeight: '1.75',
            },
            inlineCode: {
              fontFamily: 'Courier Prime, monospace',
              fontSize: '15px',
              fontWeight: '400',
              fontStyle: 'normal',
              lineHeight: '1.75',
            },
          },
        },
      },
    });
  };

  render() {
    return (
      <div
        id="apimatic-widget"
        style={{ height: 'calc(100vh - 80px', width: '100%' }}
      />
    );
  }
}

export default ApimaticWidget;
