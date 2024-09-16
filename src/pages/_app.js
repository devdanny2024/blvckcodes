import '@/styles/globals.css'
import '@/styles/Footer.css'
import '@/styles/Navbar.css'
import '@/styles/Header.css'
import '@/styles/Aboutus.css'
import '@/styles/Whyus.css'
import '@/styles/Contactus.css'
import '@/styles/Ourpackages.css'
import { useEffect } from 'react';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    window.heapReadyCb = window.heapReadyCb || [];
    window.heap = window.heap || [];
    window.heap.load = function (e, t) {
      window.heap.envId = e;
      window.heap.clientConfig = t = t || {};
      window.heap.clientConfig.shouldFetchServerConfig = !1;
      var a = document.createElement("script");
      a.type = "text/javascript";
      a.async = !0;
      a.src = "https://cdn.us.heap-api.com/config/" + e + "/heap_config.js";
      var r = document.getElementsByTagName("script")[0];
      r.parentNode.insertBefore(a, r);
      var n = [
        "init",
        "startTracking",
        "stopTracking",
        "track",
        "resetIdentity",
        "identify",
        "getSessionId",
        "getUserId",
        "getIdentity",
        "addUserProperties",
        "addEventProperties",
        "removeEventProperty",
        "clearEventProperties",
        "addAccountProperties",
        "addAdapter",
        "addTransformer",
        "addTransformerFn",
        "onReady",
        "addPageviewProperties",
        "removePageviewProperty",
        "clearPageviewProperties",
        "trackPageview",
      ];
      var i = function (e) {
        return function () {
          var t = Array.prototype.slice.call(arguments, 0);
          window.heapReadyCb.push({
            name: e,
            fn: function () {
              heap[e] && heap[e].apply(heap, t);
            },
          });
        };
      };
      for (var p = 0; p < n.length; p++) heap[n[p]] = i(n[p]);
    };
    heap.load("573704305");
  }, []);
  return (
    <>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.heapReadyCb=window.heapReadyCb||[],window.heap=window.heap||[],heap.load=function(e,t){window.heap.envId=e,window.heap.clientConfig=t=t||{},window.heap.clientConfig.shouldFetchServerConfig=!1;var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://cdn.us.heap-api.com/config/"+e+"/heap_config.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(a,r);var n=["init","startTracking","stopTracking","track","resetIdentity","identify","getSessionId","getUserId","getIdentity","addUserProperties","addEventProperties","removeEventProperty","clearEventProperties","addAccountProperties","addAdapter","addTransformer","addTransformerFn","onReady","addPageviewProperties","removePageviewProperty","clearPageviewProperties","trackPageview"],i=function(e){return function(){var t=Array.prototype.slice.call(arguments,0);window.heapReadyCb.push({name:e,fn:function(){heap[e]&&heap[e].apply(heap,t)}})}};for(var p=0;p<n.length;p++)heap[n[p]]=i(n[p])};
            heap.load("573704305");
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
