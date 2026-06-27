/* @ds-bundle: {"namespace":"EditorialDS","components":[{"name":"AgeWarning","sourcePath":"components/general/AgeWarning/AgeWarning.jsx"},{"name":"ArticleCard","sourcePath":"components/general/ArticleCard/ArticleCard.jsx"},{"name":"Breadcrumb","sourcePath":"components/general/Breadcrumb/Breadcrumb.jsx"},{"name":"CodeBlock","sourcePath":"components/general/CodeBlock/CodeBlock.jsx"},{"name":"DataChart","sourcePath":"components/general/DataChart/DataChart.jsx"},{"name":"Hero","sourcePath":"components/general/Hero/Hero.jsx"},{"name":"KeyPointsBox","sourcePath":"components/general/KeyPointsBox/KeyPointsBox.jsx"},{"name":"LeadForm","sourcePath":"components/general/LeadForm/LeadForm.jsx"},{"name":"LiveBlog","sourcePath":"components/general/LiveBlog/LiveBlog.jsx"},{"name":"Navigation","sourcePath":"components/general/Navigation/Navigation.jsx"},{"name":"PaywallPrompt","sourcePath":"components/general/PaywallPrompt/PaywallPrompt.jsx"},{"name":"TickerBar","sourcePath":"components/general/TickerBar/TickerBar.jsx"}],"sourceHashes":{"components/general/AgeWarning/AgeWarning.jsx":"aedbe920d2d1","components/general/AgeWarning/AgeWarning.d.ts":"18d23cda8bea","components/general/AgeWarning/AgeWarning.prompt.md":"b626ffae4b6e","components/general/ArticleCard/ArticleCard.jsx":"2c4b1bc7e933","components/general/ArticleCard/ArticleCard.d.ts":"b792b53983b5","components/general/ArticleCard/ArticleCard.prompt.md":"7258084f992b","components/general/Breadcrumb/Breadcrumb.jsx":"0ef9b7c93db9","components/general/Breadcrumb/Breadcrumb.d.ts":"c373e7c6bd1b","components/general/Breadcrumb/Breadcrumb.prompt.md":"4871c7fcfb42","components/general/CodeBlock/CodeBlock.jsx":"0e17041bf228","components/general/CodeBlock/CodeBlock.d.ts":"1bb85bc89cc4","components/general/CodeBlock/CodeBlock.prompt.md":"2d8a2a0e2ce8","components/general/DataChart/DataChart.jsx":"082e55dd05be","components/general/DataChart/DataChart.d.ts":"19b3f55c5f90","components/general/DataChart/DataChart.prompt.md":"654d7ead8c97","components/general/Hero/Hero.jsx":"f4b1333e0c0e","components/general/Hero/Hero.d.ts":"98c9576d644c","components/general/Hero/Hero.prompt.md":"90fad5137e19","components/general/KeyPointsBox/KeyPointsBox.jsx":"5340d8c99692","components/general/KeyPointsBox/KeyPointsBox.d.ts":"fd2742749616","components/general/KeyPointsBox/KeyPointsBox.prompt.md":"f347b9540c0e","components/general/LeadForm/LeadForm.jsx":"98975ce9d639","components/general/LeadForm/LeadForm.d.ts":"e08309f354c7","components/general/LeadForm/LeadForm.prompt.md":"3c9347ba0166","components/general/LiveBlog/LiveBlog.jsx":"c351df708e19","components/general/LiveBlog/LiveBlog.d.ts":"7bcc7f89a551","components/general/LiveBlog/LiveBlog.prompt.md":"5428e6a5b0ee","components/general/Navigation/Navigation.jsx":"dc9f4890db94","components/general/Navigation/Navigation.d.ts":"74e2d9a95009","components/general/Navigation/Navigation.prompt.md":"31e85161a9c4","components/general/PaywallPrompt/PaywallPrompt.jsx":"20149bada2ec","components/general/PaywallPrompt/PaywallPrompt.d.ts":"720aa7ac0676","components/general/PaywallPrompt/PaywallPrompt.prompt.md":"f023cba97a8d","components/general/TickerBar/TickerBar.jsx":"ac823be665c1","components/general/TickerBar/TickerBar.d.ts":"da18dc4312b0","components/general/TickerBar/TickerBar.prompt.md":"3104ec164870"},"inlinedExternals":[],"builtBy":"cc-design-sync"} */
"use strict";
var EditorialDS = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      var R = window.React;
      function jsx13(t, p, k) {
        return R.createElement(t, k === void 0 ? p : Object.assign({ key: k }, p));
      }
      module.exports = R;
      module.exports.jsx = jsx13;
      module.exports.jsxs = jsx13;
      module.exports.jsxDEV = jsx13;
      module.exports.Fragment = R.Fragment;
    }
  });

  // dist/index.js
  var index_exports = {};
  __export(index_exports, {
    AgeWarning: () => AgeWarning,
    ArticleCard: () => ArticleCard,
    Breadcrumb: () => Breadcrumb,
    CodeBlock: () => CodeBlock,
    DataChart: () => DataChart,
    Hero: () => Hero,
    KeyPointsBox: () => KeyPointsBox,
    LeadForm: () => LeadForm,
    LiveBlog: () => LiveBlog,
    Navigation: () => Navigation,
    PaywallPrompt: () => PaywallPrompt,
    TickerBar: () => TickerBar
  });
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var import_jsx_runtime2 = __toESM(require_react_shim(), 1);
  var import_react = __toESM(require_react_shim(), 1);
  var import_jsx_runtime3 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime4 = __toESM(require_react_shim(), 1);
  var import_react2 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime5 = __toESM(require_react_shim(), 1);
  var import_react3 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime6 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime7 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime8 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime9 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime10 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime11 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime12 = __toESM(require_react_shim(), 1);
  function ArticleCard({
    headline,
    href,
    variant = "standard",
    deck,
    category,
    pillar = "news",
    author,
    timestamp,
    imageSrc,
    imageAlt = "",
    isBreaking = false,
    readingTimeMin,
    className = ""
  }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "article",
      {
        className: `eds-article-card eds-article-card--${variant} eds-article-card--${pillar} ${isBreaking ? "eds-article-card--breaking" : ""} ${className}`,
        "data-testid": "article-card",
        children: [
          imageSrc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href, className: "eds-article-card__image-link", tabIndex: -1, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "eds-article-card__image-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "img",
            {
              src: imageSrc,
              alt: imageAlt,
              className: "eds-article-card__image",
              loading: variant === "lead" ? "eager" : "lazy",
              ...variant === "lead" ? { fetchPriority: "high" } : {}
            }
          ) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "eds-article-card__body", children: [
            (category || isBreaking) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "eds-article-card__meta-top", children: [
              isBreaking && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "eds-article-card__breaking", children: "BREAKING" }),
              category && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "eds-article-card__category", children: category })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "eds-article-card__headline", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href, className: "eds-article-card__headline-link", children: headline }) }),
            deck && variant !== "brief" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "eds-article-card__deck", children: deck }),
            (author || timestamp || readingTimeMin) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "eds-article-card__meta-bottom", children: [
              author && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "eds-article-card__author", children: author }),
              timestamp && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", { className: "eds-article-card__timestamp", children: timestamp }),
              readingTimeMin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "eds-article-card__reading-time", children: [
                readingTimeMin,
                " min"
              ] })
            ] })
          ] })
        ]
      }
    );
  }
  function Hero({
    headline,
    variant = "editorial",
    deck,
    imageSrc,
    imageAlt = "",
    primaryCTA,
    secondaryCTA,
    category,
    trustBadge,
    className = ""
  }) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "section",
      {
        className: `eds-hero eds-hero--${variant} ${className}`,
        "data-testid": "hero",
        children: [
          imageSrc && variant === "editorial" && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "eds-hero__image-wrap", "aria-hidden": "true", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "img",
              {
                src: imageSrc,
                alt: imageAlt,
                className: "eds-hero__image",
                loading: "eager",
                fetchPriority: "high"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "eds-hero__image-overlay" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "eds-hero__content", children: [
            category && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "eds-hero__category", children: category }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { className: "eds-hero__headline", children: headline }),
            deck && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "eds-hero__deck", children: deck }),
            (primaryCTA || secondaryCTA) && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "eds-hero__ctas", children: [
              primaryCTA && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { href: primaryCTA.href, className: "eds-hero__cta eds-hero__cta--primary", children: primaryCTA.label }),
              secondaryCTA && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { href: secondaryCTA.href, className: "eds-hero__cta eds-hero__cta--secondary", children: secondaryCTA.label })
            ] }),
            trustBadge && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "eds-hero__trust", children: trustBadge })
          ] }),
          imageSrc && variant === "product" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "eds-hero__product-image", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "eds-hero__product-window", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "eds-hero__window-chrome", "aria-hidden": "true", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {}),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {}),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {})
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "img",
              {
                src: imageSrc,
                alt: imageAlt,
                className: "eds-hero__product-screenshot",
                loading: "eager",
                fetchPriority: "high"
              }
            )
          ] }) })
        ]
      }
    );
  }
  function Navigation({
    logo,
    logoHref = "/",
    items,
    ctaLabel,
    ctaHref,
    variant = "editorial",
    className = ""
  }) {
    const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("header", { className: `eds-nav eds-nav--${variant} ${className}`, role: "banner", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: "#main-content", className: "eds-nav__skip", children: "Passer au contenu principal" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "eds-nav__inner", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: logoHref, className: "eds-nav__logo", "aria-label": "Accueil", children: logo }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "nav",
          {
            className: "eds-nav__links",
            "aria-label": "Navigation principale",
            "aria-hidden": mobileOpen ? void 0 : void 0,
            children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "a",
              {
                href: item.href,
                className: `eds-nav__link ${item.pillar ? `eds-nav__link--${item.pillar}` : ""}`,
                children: item.label
              },
              item.href
            ))
          }
        ),
        ctaLabel && ctaHref && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: ctaHref, className: "eds-nav__cta", children: ctaLabel }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "button",
          {
            className: "eds-nav__burger",
            "aria-label": mobileOpen ? "Fermer le menu" : "Ouvrir le menu",
            "aria-expanded": mobileOpen,
            "aria-controls": "eds-mobile-nav",
            onClick: () => setMobileOpen((o) => !o),
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M18 6L6 18M6 6l12 12" }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "3", y1: "18", x2: "21", y2: "18" })
            ] }) })
          }
        )
      ] }),
      mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        "nav",
        {
          id: "eds-mobile-nav",
          className: "eds-nav__mobile",
          "aria-label": "Menu mobile",
          children: [
            items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "a",
              {
                href: item.href,
                className: "eds-nav__mobile-link",
                onClick: () => setMobileOpen(false),
                children: item.label
              },
              item.href
            )),
            ctaLabel && ctaHref && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: ctaHref, className: "eds-nav__cta eds-nav__mobile-cta", children: ctaLabel })
          ]
        }
      )
    ] });
  }
  function Breadcrumb({ items, className = "" }) {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        ...item.url ? { item: item.url } : {}
      }))
    };
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "script",
        {
          type: "application/ld+json",
          dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("nav", { "aria-label": "Fil d'Ariane", className: `eds-breadcrumb ${className}`, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("ol", { className: "eds-breadcrumb__list", role: "list", children: items.map((item, i) => {
        const isLast = i === items.length - 1;
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("li", { className: "eds-breadcrumb__item", children: [
          !isLast && item.url ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: item.url, className: "eds-breadcrumb__link", children: item.name }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "span",
            {
              className: "eds-breadcrumb__current",
              "aria-current": isLast ? "page" : void 0,
              children: item.name
            }
          ),
          !isLast && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "eds-breadcrumb__sep", "aria-hidden": "true", children: "/" })
        ] }, i);
      }) }) })
    ] });
  }
  var DEFAULT_FIELDS = [
    { name: "name", label: "Nom complet", type: "text", required: true },
    { name: "email", label: "Adresse e-mail", type: "email", required: true },
    { name: "message", label: "Message", type: "textarea" }
  ];
  function LeadForm({
    fields = DEFAULT_FIELDS,
    submitLabel = "Envoyer",
    onSubmit,
    successMessage = "Message envoy\xE9. Nous vous r\xE9pondrons sous 48h.",
    errorMessage = "Une erreur est survenue. Veuillez r\xE9essayer.",
    className = ""
  }) {
    const [status, setStatus] = (0, import_react2.useState)("idle");
    const [values, setValues] = (0, import_react2.useState)({});
    async function handleSubmit(e) {
      e.preventDefault();
      if (!onSubmit) return;
      setStatus("loading");
      try {
        await onSubmit(values);
        setStatus("success");
      } catch {
        setStatus("error");
      }
    }
    function handleChange(name, value) {
      setValues((v) => ({ ...v, [name]: value }));
    }
    if (status === "success") {
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: `eds-lead-form eds-lead-form--success ${className}`, role: "alert", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("polyline", { points: "22 4 12 14.01 9 11.01" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: successMessage })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      "form",
      {
        className: `eds-lead-form ${className}`,
        onSubmit: handleSubmit,
        noValidate: true,
        children: [
          fields.map((field) => {
            const id = `eds-field-${field.name}`;
            return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "eds-lead-form__field", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { htmlFor: id, className: "eds-lead-form__label", children: [
                field.label,
                field.required && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "eds-lead-form__required", "aria-label": "obligatoire", children: " *" })
              ] }),
              field.type === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                "textarea",
                {
                  id,
                  name: field.name,
                  className: "eds-lead-form__input eds-lead-form__textarea",
                  placeholder: field.placeholder,
                  required: field.required,
                  rows: 4,
                  value: values[field.name] ?? "",
                  onChange: (e) => handleChange(field.name, e.target.value)
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                "input",
                {
                  id,
                  name: field.name,
                  type: field.type ?? "text",
                  className: "eds-lead-form__input",
                  placeholder: field.placeholder,
                  required: field.required,
                  value: values[field.name] ?? "",
                  onChange: (e) => handleChange(field.name, e.target.value)
                }
              )
            ] }, field.name);
          }),
          status === "error" && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "eds-lead-form__error", role: "alert", children: errorMessage }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "button",
            {
              type: "submit",
              className: "eds-lead-form__submit",
              disabled: status === "loading",
              "aria-busy": status === "loading",
              children: status === "loading" ? "Envoi en cours\u2026" : submitLabel
            }
          )
        ]
      }
    );
  }
  function CodeBlock({
    code,
    language = "javascript",
    filename,
    showLineNumbers = false,
    className = ""
  }) {
    const [copied, setCopied] = (0, import_react3.useState)(false);
    async function handleCopy() {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2e3);
      } catch {
      }
    }
    const lines = code.trim().split("\n");
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: `eds-code-block ${className}`, role: "region", "aria-label": "Exemple de code", children: [
      (filename || language) && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "eds-code-block__header", children: [
        filename && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "eds-code-block__filename", children: filename }),
        !filename && language && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "eds-code-block__lang", children: language }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
          "button",
          {
            className: "eds-code-block__copy",
            onClick: handleCopy,
            "aria-label": copied ? "Code copi\xE9" : "Copier le code",
            children: [
              copied ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("polyline", { points: "20 6 9 17 4 12" }) }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: [
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "eds-sr-only", "aria-live": "polite", children: copied ? "Copi\xE9 !" : "" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "eds-code-block__scroll", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("pre", { className: "eds-code-block__pre", children: showLineNumbers ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("code", { className: "eds-code-block__code", children: lines.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: "eds-code-block__line", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "eds-code-block__line-num", "aria-hidden": "true", children: i + 1 }),
        line
      ] }, i)) }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("code", { className: "eds-code-block__code", children: code.trim() }) }) })
    ] });
  }
  function LiveBlog({
    headline,
    isLive = true,
    entries,
    showKeyEventsOnly = false,
    className = ""
  }) {
    const filtered = showKeyEventsOnly ? entries.filter((e) => e.isKeyEvent) : entries;
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("section", { className: `eds-liveblog ${className}`, "data-testid": "liveblog", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "eds-liveblog__header", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h1", { className: "eds-liveblog__headline", children: headline }),
        isLive && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "eds-liveblog__live", "aria-label": "Couverture en direct", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "eds-liveblog__dot", "aria-hidden": "true" }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "LIVE" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "div",
        {
          className: "eds-liveblog__entries",
          "aria-live": "polite",
          "aria-atomic": "false",
          "aria-relevant": "additions",
          children: filtered.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
            "article",
            {
              id: `entry-${entry.id}`,
              className: `eds-liveblog__entry ${entry.isKeyEvent ? "eds-liveblog__entry--key" : ""}`,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "eds-liveblog__entry-meta", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("time", { className: "eds-liveblog__entry-time", children: entry.timestamp }),
                  entry.isKeyEvent && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "eds-liveblog__key-label", children: "\xC9v\xE9nement cl\xE9" }),
                  entry.author && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "eds-liveblog__entry-author", children: entry.author })
                ] }),
                entry.headline && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { className: "eds-liveblog__entry-headline", children: entry.headline }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                  "div",
                  {
                    className: "eds-liveblog__entry-body",
                    dangerouslySetInnerHTML: { __html: entry.body }
                  }
                )
              ]
            },
            entry.id
          ))
        }
      )
    ] });
  }
  function KeyPointsBox({ points, title = "Points cl\xE9s", className = "" }) {
    const capped = points.slice(0, 5);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      "aside",
      {
        className: `eds-key-points ${className}`,
        role: "note",
        "aria-label": "Points cl\xE9s de l'article",
        children: [
          title && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { className: "eds-key-points__title", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("ul", { className: "eds-key-points__list", children: capped.map((point, i) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "eds-key-points__item", children: point }, i)) })
        ]
      }
    );
  }
  function monthsAgo(date) {
    const now = /* @__PURE__ */ new Date();
    return (now.getFullYear() - date.getFullYear()) * 12 + (now.getMonth() - date.getMonth());
  }
  function AgeWarning({ publishedAt, thresholdMonths = 12, className = "" }) {
    const date = typeof publishedAt === "string" ? new Date(publishedAt) : publishedAt;
    const months = monthsAgo(date);
    if (months < thresholdMonths) return null;
    const years = Math.floor(months / 12);
    const label = years >= 1 ? `${years} an${years > 1 ? "s" : ""}` : `${months} mois`;
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
      "div",
      {
        className: `eds-age-warning ${className}`,
        role: "note",
        "aria-label": `Cet article date de plus de ${label}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("svg", { className: "eds-age-warning__icon", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { children: [
            "Cet article a \xE9t\xE9 publi\xE9 il y a plus de ",
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("strong", { children: label }),
            ". Certaines informations peuvent ne plus \xEAtre \xE0 jour."
          ] })
        ]
      }
    );
  }
  function PaywallPrompt({
    variant = "soft",
    headline,
    body,
    ctaLabel = "S'abonner",
    ctaHref = "#subscribe",
    articlesRemaining,
    className = ""
  }) {
    const defaultHeadlines = {
      soft: `Il vous reste ${articlesRemaining ?? 2} article${(articlesRemaining ?? 2) > 1 ? "s" : ""} gratuit${(articlesRemaining ?? 2) > 1 ? "s" : ""}`,
      hard: "Cet article est r\xE9serv\xE9 aux abonn\xE9s",
      support: "Aidez-nous \xE0 continuer ce travail"
    };
    const defaultBodies = {
      soft: "Abonnez-vous pour un acc\xE8s illimit\xE9 \xE0 notre journalisme.",
      hard: "Abonnez-vous pour lire cet article et acc\xE9der \xE0 tous nos contenus.",
      support: "Notre journalisme est ind\xE9pendant. Votre soutien nous permet de continuer."
    };
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      "aside",
      {
        className: `eds-paywall eds-paywall--${variant} ${className}`,
        "aria-label": variant === "hard" ? "Contenu r\xE9serv\xE9 aux abonn\xE9s" : "Invitation \xE0 s'abonner",
        children: [
          variant === "hard" && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "eds-paywall__blur-indicator", "aria-hidden": "true" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "eds-paywall__box", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "eds-paywall__headline", children: headline ?? defaultHeadlines[variant] }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "eds-paywall__body", children: body ?? defaultBodies[variant] }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("a", { href: ctaHref, className: "eds-paywall__cta", children: ctaLabel })
          ] })
        ]
      }
    );
  }
  function TickerBar({ items, label = "Cours en direct", className = "" }) {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      "div",
      {
        className: `eds-ticker ${className}`,
        role: "marquee",
        "aria-label": label,
        "aria-live": "off",
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "eds-ticker__track", children: [...items, ...items].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "eds-ticker__item", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "eds-ticker__symbol", children: item.symbol }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "eds-ticker__value", children: item.value }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: `eds-ticker__change ${item.changePositive ? "eds-ticker__change--up" : "eds-ticker__change--down"}`, children: [
            item.changePositive ? "\u25B2" : "\u25BC",
            " ",
            item.change
          ] })
        ] }, `${item.id}-${i}`)) })
      }
    );
  }
  function DataChart({
    data,
    type = "bar",
    title,
    unit = "",
    source,
    color = "var(--color-accent-primary)",
    className = ""
  }) {
    const max = Math.max(...data.map((d) => d.value));
    if (type === "sparkline") {
      const w = 120;
      const h = 32;
      const pts = data.map((d, i) => {
        const x = i / (data.length - 1) * w;
        const y = h - d.value / max * (h - 4) - 2;
        return `${x},${y}`;
      }).join(" ");
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: `eds-chart eds-chart--sparkline ${className}`, title, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("svg", { width: w, height: h, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        "polyline",
        {
          points: pts,
          fill: "none",
          stroke: color,
          strokeWidth: "1.5",
          strokeLinejoin: "round"
        }
      ) }) });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("figure", { className: `eds-chart eds-chart--${type} ${className}`, "aria-label": title, children: [
      title && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("figcaption", { className: "eds-chart__title", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "eds-chart__bars", "aria-hidden": "true", children: data.map((d) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "eds-chart__bar-group", children: [
        type === "bar" && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          "div",
          {
            className: "eds-chart__bar",
            style: { height: `${d.value / max * 100}%`, background: color },
            title: `${d.label}: ${d.value}${unit}`
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "eds-chart__bar-label", children: d.label })
      ] }, d.label)) }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("table", { className: "eds-chart__table-fallback", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("caption", { children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("th", { scope: "col", children: "P\xE9riode" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("th", { scope: "col", children: [
            "Valeur",
            unit ? ` (${unit})` : ""
          ] })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tbody", { children: data.map((d) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("th", { scope: "row", children: d.label }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("td", { children: d.value })
        ] }, d.label)) })
      ] }),
      source && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("figcaption", { className: "eds-chart__source", children: [
        "Source : ",
        source
      ] })
    ] });
  }
  return __toCommonJS(index_exports);
})();
window.EditorialDS=EditorialDS.__dsMainNs?Object.assign({},EditorialDS,EditorialDS.__dsMainNs,{__dsMainNs:undefined}):EditorialDS;
