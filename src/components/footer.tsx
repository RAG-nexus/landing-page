"use client";
import React from "react";
import Script from "next/script";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const Footer: React.FC = () => {
  const t = useTranslations("common");
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="font-bold text-white text-lg mb-2">RAGnexus</p>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              {t("footer-tagline")}
            </p>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">{t("footer-badge-made-in-spain")}</span>
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">{t("footer-badge-eu-data")}</span>
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">{t("footer-badge-gdpr")}</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <p className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">{t("footer-product")}</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="#offer" className="hover:text-white transition-colors">{t("footer-how-it-works")}</Link></li>
              <li><Link href="#verticals" className="hover:text-white transition-colors">{t("footer-sectors")}</Link></li>
              <li><Link href="#roi" className="hover:text-white transition-colors">{t("footer-roi")}</Link></li>
              <li><Link href="#compare" className="hover:text-white transition-colors">{t("footer-vs-chatgpt")}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">{t("footer-legal")}</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.iubenda.com/privacy-policy/72497857"
                  className="iubenda-black iubenda-noiframe iubenda-embed iub-legal-only iubenda-noiframe hover:text-white transition-colors"
                  title={t("footer-privacy-policy")}
                >
                  {t("footer-privacy-policy")}
                </a>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">{t("footer-legal-notice")}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t("footer-cookies-policy")}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col lg:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <span>{t("footer-copyright", { year: new Date().getFullYear() })}</span>
          <span>{t("footer-hosting")}</span>
          <a href="mailto:javier@ragnexus.com" className="hover:text-white transition-colors">javier@ragnexus.com</a>
        </div>
      </div>

      <Script id="_privacy_policy_button_">
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
