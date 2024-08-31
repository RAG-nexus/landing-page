import React from "react";
import useTranslation from "next-translate/useTranslation";
import Script from "next/script";

export const Footer: React.FC = () => {
  const { t } = useTranslation("common");
  return (
    <footer
      className="bg-white dark:bg-slate-800 border-t py-6 mb-0 flex justify-evenly"
      style={{
        borderColor: "#59A52C",
      }}
    >
      <div className="max-w-7xl px-4 text-center">
        <span className="text-sm text-gray-500 dark:text-gray-100">
          © {new Date().getFullYear()} RAGnexus. {t`all-rights-reserved`}
        </span>
      </div>
      <a
        href="https://www.iubenda.com/privacy-policy/72497857"
        className="iubenda-black iubenda-noiframe iubenda-embed iub-legal-only iubenda-noiframe "
        title="Política de Privacidad "
      >
        Política de Privacidad
      </a>
      <Script>
        {`(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);`}
      </Script>
      <Script id="__linkedin_partner_id__">
        {`_linkedin_partner_id = "7569273";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);`}
      </Script>
      <Script id="__linkedin_tracking__">
        {`(function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);})(window.lintrk);`}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          className="hidden"
          alt=""
          src="https://px.ads.linkedin.com/collect/?pid=7569273&fmt=gif"
        />
      </noscript>
    </footer>
  );
};
