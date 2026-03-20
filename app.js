import { chapters, faqs, practiceItems } from "./content.js";

const root = document.documentElement;
const chapterNav = document.getElementById("chapterNav");
const chapterPanel = document.getElementById("chapterPanel");
const faqList = document.getElementById("faqList");
const practiceList = document.getElementById("practiceList");
const themeToggle = document.getElementById("themeToggle");
const loadingScreen = document.getElementById("loadingScreen");
const loadingSkip = document.getElementById("loadingSkip");
const mathJaxScript = document.getElementById("MathJax-script");
const fxStarsEl = document.getElementById("fxStars");
const fxToggle = document.getElementById("fxToggle");

const voltageRange = document.getElementById("voltageRange");
const distanceRange = document.getElementById("distanceRange");
const chargeSwitch = document.getElementById("chargeSwitch");
const calcModeSwitch = document.getElementById("calcModeSwitch");
const forceModeSwitch = document.getElementById("forceModeSwitch");

const voltageInput = document.getElementById("voltageInput");
const voltageUnit = document.getElementById("voltageUnit");
const distanceInput = document.getElementById("distanceInput");
const distanceUnit = document.getElementById("distanceUnit");
const fieldInput = document.getElementById("fieldInput");
const fieldUnit = document.getElementById("fieldUnit");
const chargeMagnitudeInput = document.getElementById("chargeMagnitudeInput");
const chargeMagnitudeUnit = document.getElementById("chargeMagnitudeUnit");
const forceInput = document.getElementById("forceInput");
const forceUnit = document.getElementById("forceUnit");

const calcModeValue = document.getElementById("calcModeValue");
const modeHint = document.getElementById("modeHint");
const voltageValue = document.getElementById("voltageValue");
const distanceValue = document.getElementById("distanceValue");
const fieldInputValue = document.getElementById("fieldInputValue");
const chargeValue = document.getElementById("chargeValue");
const fieldValue = document.getElementById("fieldValue");
const forceLabel = document.getElementById("forceLabel");
const forceValue = document.getElementById("forceValue");
const forceDirection = document.getElementById("forceDirection");
const forceHint = document.getElementById("forceHint");
const simHint = document.getElementById("simHint");

const summaryMode = document.getElementById("summaryMode");
const summaryVoltage = document.getElementById("summaryVoltage");
const summaryDistance = document.getElementById("summaryDistance");
const summaryField = document.getElementById("summaryField");
const summaryForce = document.getElementById("summaryForce");

const heroCharge = document.getElementById("heroCharge");
const heroDirection = document.getElementById("heroDirection");
const simCharge = document.getElementById("simCharge");
const simArrow = document.getElementById("simArrow");
const fieldResultCard = document.getElementById("fieldResultCard");
const forceResultCard = document.getElementById("forceResultCard");

const voltageCard = voltageRange.closest(".control-card");
const distanceCard = distanceRange.closest(".control-card");
const fieldCard = fieldInput.closest(".control-card");
const chargeCard = document.getElementById("chargeCard");

const chargeResultCard = document.getElementById("chargeResultCard");
const chargeResultValue = document.getElementById("chargeResultValue");

const formulaModes = {
    field: {
        key: "field",
        label: "T\u00ednh E",
        output: "field",
        note: "Nh\u1eadp U v\u00e0 d, h\u1ec7 s\u1ebd t\u1ef1 t\u00ednh c\u01b0\u1eddng \u0111\u1ed9 \u0111i\u1ec7n tr\u01b0\u1eddng theo c\u00f4ng th\u1ee9c E = U / d. \u00d4 vi\u1ec1n s\u00e1ng l\u00e0 \u0111\u1ea1i l\u01b0\u1ee3ng \u0111ang \u0111\u01b0\u1ee3c h\u1ec7 t\u1ef1 t\u00ednh.",
        resultKey: "field"
    },
    voltage: {
        key: "voltage",
        label: "T\u00ednh U",
        output: "voltage",
        note: "Nh\u1eadp E v\u00e0 d, h\u1ec7 s\u1ebd t\u1ef1 t\u00ednh hi\u1ec7u \u0111i\u1ec7n th\u1ebf theo c\u00f4ng th\u1ee9c U = E . d. \u00d4 vi\u1ec1n s\u00e1ng l\u00e0 \u0111\u1ea1i l\u01b0\u1ee3ng \u0111ang \u0111\u01b0\u1ee3c h\u1ec7 t\u1ef1 t\u00ednh."
    },
    distance: {
        key: "distance",
        label: "T\u00ednh d",
        output: "distance",
        note: "Nh\u1eadp U v\u00e0 E, h\u1ec7 s\u1ebd t\u1ef1 t\u00ednh kho\u1ea3ng c\u00e1ch theo c\u00f4ng th\u1ee9c d = U / E. \u00d4 vi\u1ec1n s\u00e1ng l\u00e0 \u0111\u1ea1i l\u01b0\u1ee3ng \u0111ang \u0111\u01b0\u1ee3c h\u1ec7 t\u1ef1 t\u00ednh."
    },
    force: {
        key: "force",
        label: "T\u00ednh F",
        output: "force",
        note: "Nh\u1eadp U, d v\u00e0 |q|, h\u1ec7 s\u1ebd t\u00ednh E = U / d r\u1ed3i suy ra l\u1ef1c \u0111i\u1ec7n theo c\u00f4ng th\u1ee9c F = |q|E. \u00d4 vi\u1ec1n s\u00e1ng l\u00e0 \u0111\u1ea1i l\u01b0\u1ee3ng \u0111ang \u0111\u01b0\u1ee3c h\u1ec7 t\u1ef1 t\u00ednh.",
        resultKey: "force"
    },
    charge: {
        key: "charge",
        label: "T\u00ednh q",
        output: "charge",
        note: "Nh\u1eadp F v\u00e0 E, h\u1ec7 s\u1ebd t\u1ef1 t\u00ednh \u0111i\u1ec7n t\u00edch theo c\u00f4ng th\u1ee9c q = F / E. \u00d4 vi\u1ec1n s\u00e1ng l\u00e0 \u0111\u1ea1i l\u01b0\u1ee3ng \u0111ang \u0111\u01b0\u1ee3c h\u1ec7 t\u1ef1 t\u00ednh.",
        resultKey: "charge"
    }
};

const interactiveSurfaceSelector = [
    ".brand-mark",
    ".stage-chip",
    ".top-nav a",
    ".theme-toggle",
    ".button",
    ".mode-option",
    ".charge-option",
    ".practice-card__toggle",
    ".hero-sigil",
    ".loading-skip"
].join(", ");

const glowSurfaceSelector = [
    ".site-header",
    ".hero",
    ".section-heading",
    ".hero-copy",
    ".hero-stage",
    ".stage-card",
    ".stat-card",
    ".lesson-workspace",
    ".chapter-nav__button",
    ".chapter-card",
    ".control-card",
    ".manual-field",
    ".result-card",
    ".sim-visual",
    ".summary-line",
    ".faq-item",
    ".practice-card",
    ".memory-card"
].join(", ");

const motionTargetSelector = [
    ".hero-copy > *",
    ".hero-stage",
    ".stat-card",
    ".section-heading",
    ".chapter-nav__button",
    ".chapter-card",
    ".control-card",
    ".result-card",
    ".sim-visual",
    ".summary-line",
    ".faq-item",
    ".practice-card",
    ".memory-card"
].join(", ");

const simulatorState = {
    mode: "field",
    forceMethod: "u-method",
    charge: "positive",
    voltage: 120,
    distance: 0.04,
    field: 3000,
    chargeMagnitude: 2e-7
};

const LOADING_DURATION_MS = 5000;
const CURSOR_EASE = 0.065;
const SURFACE_EASE = 0.075;
const SURFACE_TILT_INTENSITY = 1.35;

const manualBindings = [
    {
        input: voltageInput,
        select: voltageUnit,
        key: "voltage",
        minimum: 1e-9,
        maximum: 1e8
    },
    {
        input: distanceInput,
        select: distanceUnit,
        key: "distance",
        minimum: 1e-6,
        maximum: 100
    },
    {
        input: fieldInput,
        select: fieldUnit,
        key: "field",
        minimum: 1e-9,
        maximum: 1e12
    },
    {
        input: chargeMagnitudeInput,
        select: chargeMagnitudeUnit,
        key: "chargeMagnitude",
        minimum: 1e-12,
        maximum: 1
    },
    {
        input: forceInput,
        select: forceUnit,
        key: "force",
        minimum: 1e-12,
        maximum: 1e12
    }
];

let activeChapterIndex = 0;
let starsBuilt = false;
let effectsDisabled = false;

const surfaceMotion = new WeakMap();
const cursorMotion = {
    currentX: window.innerWidth * 0.5,
    currentY: window.innerHeight * 0.35,
    targetX: window.innerWidth * 0.5,
    targetY: window.innerHeight * 0.35,
    frame: 0
};

const motionObserver = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            motionObserver.unobserve(entry.target);
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px"
    })
    : null;

function clamp(value, minimum, maximum) {
    return Math.min(maximum, Math.max(minimum, value));
}

function clampPositive(value, fallback, minimum = 1e-9, maximum = Number.POSITIVE_INFINITY) {
    if (!Number.isFinite(value)) return fallback;
    return clamp(Math.abs(value), minimum, maximum);
}

function formatScientificNumber(value) {
    if (value === 0) return "0";

    const exponent = Math.floor(Math.log10(Math.abs(value)));
    const mantissa = value / (10 ** exponent);
    const formattedMantissa = new Intl.NumberFormat("vi-VN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(mantissa);

    return `${formattedMantissa} x 10^${exponent}`;
}

function formatDisplayNumber(value) {
    const abs = Math.abs(value);

    if (abs === 0) return "0";

    if (abs >= 1e6 || abs < 1e-3) {
        return formatScientificNumber(value);
    }

    const maximumFractionDigits = abs >= 1000
        ? 0
        : abs >= 100
            ? 1
            : abs >= 10
                ? 2
                : abs >= 1
                    ? 3
                    : 5;

    return new Intl.NumberFormat("vi-VN", {
        maximumFractionDigits
    }).format(value);
}

function formatForce(value) {
    return `${formatDisplayNumber(value)} N`;
}

function inputNumberString(value) {
    const abs = Math.abs(value);

    if (abs === 0) return "0";

    if (abs >= 1e6 || abs < 1e-4) {
        return value.toExponential(4).replace(/e\+?/i, "e");
    }

    const rounded = Number(value.toFixed(abs >= 100 ? 2 : abs >= 10 ? 3 : 6));
    return `${rounded}`;
}

function normalizeNumericExpression(rawValue) {
    return rawValue
        .trim()
        .replace(/\s+/g, "")
        .replace(/,/g, ".")
        .replace(/[xX×·]/g, "*")
        .replace(/[÷:]/g, "/")
        .replace(/[−–—]/g, "-");
}

function replacePowerOperators(expression) {
    const powerPattern = /(\([^()]+\)|(?:[+\-]?(?:\d+\.?\d*|\.\d+)(?:e[+\-]?\d+)?))\^(\([^()]+\)|(?:[+\-]?(?:\d+\.?\d*|\.\d+)(?:e[+\-]?\d+)?))/i;
    let nextExpression = expression;
    let previousExpression = "";

    while (nextExpression.includes("^") && nextExpression !== previousExpression) {
        previousExpression = nextExpression;
        nextExpression = nextExpression.replace(powerPattern, "Math.pow($1,$2)");
    }

    return nextExpression;
}

function parseNumericExpression(rawValue) {
    const normalized = normalizeNumericExpression(rawValue);

    if (!normalized) {
        return { state: "empty" };
    }

    if (!/^[0-9eE+\-*/().^]+$/.test(normalized)) {
        return { state: "invalid" };
    }

    const expression = replacePowerOperators(normalized);

    if (expression.includes("^")) {
        return { state: "invalid" };
    }

    try {
        const value = Function(`"use strict"; return (${expression});`)();
        if (!Number.isFinite(value)) {
            return { state: "invalid" };
        }

        return {
            state: "valid",
            value
        };
    } catch {
        return { state: "invalid" };
    }
}

function getSelectedUnitLabel(select) {
    return select.options[select.selectedIndex].textContent;
}

function getSelectedFactor(select) {
    return Number(select.value);
}

function convertFromBase(baseValue, select) {
    return baseValue / getSelectedFactor(select);
}

function formatWithSelectedUnit(baseValue, select) {
    return `${formatDisplayNumber(convertFromBase(baseValue, select))} ${getSelectedUnitLabel(select)}`;
}

function setInputState(input, state = "ready") {
    input.dataset.state = state;
}

function readManualValue(input, select, fallback, minimum = 1e-9, maximum = Number.POSITIVE_INFINITY) {
    const parsed = parseNumericExpression(input.value);

    if (parsed.state !== "valid") {
        return parsed;
    }

    return {
        state: "valid",
        value: clampPositive(parsed.value * getSelectedFactor(select), fallback, minimum, maximum)
    };
}

function applyForceToChargeMagnitude(force) {
    if (!Number.isFinite(simulatorState.field) || simulatorState.field <= 0) return;

    simulatorState.chargeMagnitude = clampPositive(force / simulatorState.field, simulatorState.chargeMagnitude, 1e-12, 1);
}

function applyForceToField(force) {
    if (!Number.isFinite(simulatorState.chargeMagnitude) || simulatorState.chargeMagnitude <= 0) return;

    simulatorState.field = clampPositive(force / simulatorState.chargeMagnitude, simulatorState.field, 1e-9, 1e12);
}

function typesetMath(target = document.body) {
    if (!window.MathJax?.typesetPromise) return;

    if (typeof window.MathJax.typesetClear === "function") {
        window.MathJax.typesetClear([target]);
    }

    window.MathJax.typesetPromise([target]).catch(() => {});
}

function makeStars() {
    if (!fxStarsEl || starsBuilt) return;

    for (let i = 0; i < 26; i += 1) {
        const star = document.createElement("span");
        star.className = "fx-star";
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.setProperty("--d", `${(Math.random() * 4 + 7).toFixed(2)}s`);
        star.style.setProperty("--delay", `${(Math.random() * 12).toFixed(2)}s`);
        star.style.setProperty("--w", `${(Math.random() * 5 + 4).toFixed(2)}em`);
        fxStarsEl.appendChild(star);
    }

    starsBuilt = true;
}

function syncCursorGlowFrame() {
    if (effectsDisabled) {
        cursorMotion.frame = 0;
        return;
    }

    cursorMotion.currentX += (cursorMotion.targetX - cursorMotion.currentX) * CURSOR_EASE;
    cursorMotion.currentY += (cursorMotion.targetY - cursorMotion.currentY) * CURSOR_EASE;

    root.style.setProperty("--cursor-x", `${cursorMotion.currentX.toFixed(1)}px`);
    root.style.setProperty("--cursor-y", `${cursorMotion.currentY.toFixed(1)}px`);

    const deltaX = Math.abs(cursorMotion.targetX - cursorMotion.currentX);
    const deltaY = Math.abs(cursorMotion.targetY - cursorMotion.currentY);

    if (deltaX > 0.15 || deltaY > 0.15) {
        cursorMotion.frame = window.requestAnimationFrame(syncCursorGlowFrame);
        return;
    }

    cursorMotion.frame = 0;
}

function toggleEffects() {
    effectsDisabled = !effectsDisabled;
    localStorage.setItem("uniform-field-effects-disabled", effectsDisabled);
    
    if (effectsDisabled) {
        root.style.setProperty("--cursor-x", "50vw");
        root.style.setProperty("--cursor-y", "35vh");
        cursorMotion.frame = 0;
    }
    
    fxToggle.dataset.fxDisabled = effectsDisabled;
    fxToggle.textContent = effectsDisabled ? "✨" : "✨";
    fxToggle.title = effectsDisabled ? "Bật hiệu ứng" : "Tắt hiệu ứng";
}

function hydrateEffectsState() {
    const storedState = localStorage.getItem("uniform-field-effects-disabled");
    effectsDisabled = storedState === "true";
    if (fxToggle) {
        fxToggle.dataset.fxDisabled = effectsDisabled;
        fxToggle.title = effectsDisabled ? "Bật hiệu ứng" : "Tắt hiệu ứng";
    }
}

function syncCursorGlow(event) {
    if (event.pointerType === "touch" || effectsDisabled) return;

    cursorMotion.targetX = event.clientX;
    cursorMotion.targetY = event.clientY;

    if (!cursorMotion.frame) {
        cursorMotion.frame = window.requestAnimationFrame(syncCursorGlowFrame);
    }
}

function bindInteractiveSurface(surface) {
    if (surfaceMotion.has(surface)) return;

    const isGlowSurface = surface.matches(glowSurfaceSelector);

    const state = {
        currentX: 0,
        currentY: 0,
        targetX: 0,
        targetY: 0,
        frame: 0
    };

    const animateSurface = () => {
        state.currentX += (state.targetX - state.currentX) * SURFACE_EASE;
        state.currentY += (state.targetY - state.currentY) * SURFACE_EASE;

        surface.style.setProperty("--tilt-x", `${state.currentX.toFixed(2)}deg`);
        surface.style.setProperty("--tilt-y", `${state.currentY.toFixed(2)}deg`);

        const deltaX = Math.abs(state.targetX - state.currentX);
        const deltaY = Math.abs(state.targetY - state.currentY);

        if (deltaX > 0.01 || deltaY > 0.01) {
            state.frame = window.requestAnimationFrame(animateSurface);
            return;
        }

        state.frame = 0;
    };

    const ensureFrame = () => {
        if (!state.frame && !effectsDisabled) {
            state.frame = window.requestAnimationFrame(animateSurface);
        }
    };

    const resetSurface = () => {
        state.targetX = 0;
        state.targetY = 0;
        surface.style.setProperty("--surface-light-x", "50%");
        surface.style.setProperty("--surface-light-y", "50%");
        if (!effectsDisabled) {
            ensureFrame();
        }
    };

    surface.classList.add("interactive-surface");
    if (isGlowSurface) {
        surface.classList.add("interactive-surface--glow");
    }
    surface.dataset.fxBound = "true";
    surface.style.setProperty("--surface-light-x", "50%");
    surface.style.setProperty("--surface-light-y", "50%");

    surface.addEventListener("pointermove", (event) => {
        if (event.pointerType === "touch") return;

        const rect = surface.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;

        state.targetX = isGlowSurface ? 0 : (0.5 - py) * SURFACE_TILT_INTENSITY;
        state.targetY = isGlowSurface ? 0 : (px - 0.5) * SURFACE_TILT_INTENSITY;
        surface.style.setProperty("--surface-light-x", `${(px * 100).toFixed(2)}%`);
        surface.style.setProperty("--surface-light-y", `${(py * 100).toFixed(2)}%`);
        if (!effectsDisabled) {
            ensureFrame();
        }
    });

    surface.addEventListener("pointerleave", resetSurface);
    surface.addEventListener("pointerup", resetSurface);
    surface.addEventListener("blur", resetSurface, true);

    surfaceMotion.set(surface, state);
}

function activateInteractiveSurfaces() {
    document.querySelectorAll(`${interactiveSurfaceSelector}, ${glowSurfaceSelector}`).forEach(bindInteractiveSurface);
}

function registerMotionTarget(node, index) {
    if (node.dataset.motionBound === "true") return;

    node.dataset.motionBound = "true";
    node.classList.add("motion-target");
    node.style.transitionDelay = `${Math.min((index % 7) * 80, 360)}ms`;

    if (!motionObserver) {
        window.requestAnimationFrame(() => node.classList.add("is-visible"));
        return;
    }

    motionObserver.observe(node);
}

function activateMotionTargets() {
    document.querySelectorAll(motionTargetSelector).forEach((node, index) => {
        registerMotionTarget(node, index);
    });
}

function refreshEnhancements() {
    activateInteractiveSurfaces();
    activateMotionTargets();
}

function renderChapterNav() {
    chapterNav.innerHTML = chapters.map((chapter, index) => `
        <button
            class="chapter-nav__button ${index === activeChapterIndex ? "is-active" : ""}"
            type="button"
            data-chapter-index="${index}"
        >
            <span>${chapter.badge}</span>
            <strong>${chapter.nav}</strong>
        </button>
    `).join("");
}

function renderChapterPanel(index) {
    const chapter = chapters[index];

    chapterPanel.innerHTML = `
        <div class="chapter-panel__header">
            <span class="eyebrow">${chapter.badge}</span>
            <h3>${chapter.title}</h3>
            <p>${chapter.summary}</p>
        </div>

        <div class="chapter-panel__grid">
            <section class="chapter-card chapter-card--formula">
                <span class="card-label">C\u00f4ng th\u1ee9c</span>
                <div class="formula">${chapter.formula}</div>
                <p>${chapter.formulaNote}</p>
            </section>

            <section class="chapter-card">
                <span class="card-label">\u0110i\u1ec3m c\u1ea7n nh\u1edb</span>
                <ul class="bullet-list">
                    ${chapter.essentials.map((item) => `<li>${item}</li>`).join("")}
                </ul>
            </section>

            <section class="chapter-card">
                <span class="card-label">Hay nh\u1ea7m</span>
                <ul class="bullet-list bullet-list--warning">
                    ${chapter.mistakes.map((item) => `<li>${item}</li>`).join("")}
                </ul>
            </section>

            <section class="chapter-card chapter-card--qa">
                <span class="card-label">H\u1ecfi nhanh</span>
                <h4>${chapter.question}</h4>
                <p>${chapter.answer}</p>
            </section>
        </div>
    `;

    typesetMath(chapterPanel);
}

function setActiveChapter(index) {
    activeChapterIndex = index;
    renderChapterNav();
    renderChapterPanel(index);
    refreshEnhancements();
}

function renderFaqs() {
    faqList.innerHTML = faqs.map((item, index) => `
        <article class="faq-item ${index === 0 ? "is-open" : ""}">
            <button
                class="faq-item__trigger"
                type="button"
                data-faq-index="${index}"
                aria-expanded="${index === 0 ? "true" : "false"}"
            >
                <span>${item.question}</span>
            </button>
            <div class="faq-item__body" style="height: ${index === 0 ? "auto" : "0px"};">
                <div class="faq-item__body-inner">
                    <p>${item.answer}</p>
                </div>
            </div>
        </article>
    `).join("");

    requestAnimationFrame(() => {
        faqList.querySelectorAll(".faq-item").forEach((item) => {
            const body = item.querySelector(".faq-item__body");
            if (item.classList.contains("is-open")) {
                body.style.height = "auto";
            }
        });
    });

    refreshEnhancements();
    typesetMath(faqList);
}

function setCollapsibleState(item, shouldOpen, {
    openClass = "is-open",
    bodySelector,
    innerSelector,
    triggerSelector,
    expandedText,
    collapsedText
}) {
    const trigger = triggerSelector ? item.querySelector(triggerSelector) : null;
    const body = item.querySelector(bodySelector);
    const inner = item.querySelector(innerSelector);

    if (!body || !inner) return;

    const measuredHeight = body.style.height === "auto"
        ? inner.scrollHeight
        : body.getBoundingClientRect().height;

    body.style.height = `${measuredHeight}px`;

    if (shouldOpen) {
        item.classList.add(openClass);

        if (trigger) {
            trigger.setAttribute("aria-expanded", "true");
            if (expandedText) {
                trigger.textContent = expandedText;
            }
        }

        requestAnimationFrame(() => {
            body.style.height = `${inner.scrollHeight}px`;
        });

        const onOpened = (event) => {
            if (event.target !== body || event.propertyName !== "height") return;

            if (item.classList.contains(openClass)) {
                body.style.height = "auto";
            }

            body.removeEventListener("transitionend", onOpened);
        };

        body.addEventListener("transitionend", onOpened);
        return;
    }

    if (trigger) {
        trigger.setAttribute("aria-expanded", "false");
        if (collapsedText) {
            trigger.textContent = collapsedText;
        }
    }

    requestAnimationFrame(() => {
        item.classList.remove(openClass);
        body.style.height = "0px";
    });
}

function setFaqItemState(item, shouldOpen) {
    setCollapsibleState(item, shouldOpen, {
        bodySelector: ".faq-item__body",
        innerSelector: ".faq-item__body-inner",
        triggerSelector: ".faq-item__trigger"
    });
}

function setPracticeCardState(card, shouldOpen) {
    setCollapsibleState(card, shouldOpen, {
        bodySelector: ".practice-card__answer-wrap",
        innerSelector: ".practice-card__answer",
        triggerSelector: ".practice-card__toggle",
        expandedText: "\u1ea8n \u0111\u00e1p \u00e1n",
        collapsedText: "Hi\u1ec7n \u0111\u00e1p \u00e1n"
    });
}

function renderPracticeItems() {
    practiceList.innerHTML = practiceItems.map((item, index) => `
        <article class="practice-card">
            <span class="practice-card__index">C\u00e2u ${index + 1}</span>
            <h4>${item.question}</h4>
            <button
                class="button button--ghost practice-card__toggle"
                type="button"
                data-practice-index="${index}"
                aria-expanded="false"
            >
                Hi\u1ec7n \u0111\u00e1p \u00e1n
            </button>
            <div class="practice-card__answer-wrap" style="height: 0px;">
                <div class="practice-card__answer">
                    ${item.answer}
                </div>
            </div>
        </article>
    `).join("");

    refreshEnhancements();
    typesetMath(practiceList);
}

function updateModeButtons() {
    calcModeSwitch.querySelectorAll("[data-calc-mode]").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.calcMode === simulatorState.mode);
    });
    
    forceModeSwitch.querySelectorAll("[data-force-mode]").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.forceMode === simulatorState.forceMethod);
    });
}

function updateChargeButtons() {
    chargeSwitch.querySelectorAll("[data-charge]").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.charge === simulatorState.charge);
    });
}

function calculateSimulation() {
    const safeVoltage = clampPositive(simulatorState.voltage, 120, 1e-9, 1e8);
    const safeDistance = clampPositive(simulatorState.distance, 0.04, 1e-6, 100);
    const safeField = clampPositive(simulatorState.field, 3000, 1e-9, 1e12);

    if (simulatorState.mode === "field") {
        simulatorState.voltage = safeVoltage;
        simulatorState.distance = safeDistance;
        simulatorState.field = safeVoltage / safeDistance;
    }

    if (simulatorState.mode === "voltage") {
        simulatorState.distance = safeDistance;
        simulatorState.field = safeField;
        simulatorState.voltage = safeField * safeDistance;
    }

    if (simulatorState.mode === "distance") {
        simulatorState.voltage = safeVoltage;
        simulatorState.field = safeField;
        simulatorState.distance = safeVoltage / safeField;
    }

    if (simulatorState.mode === "force") {
        simulatorState.voltage = safeVoltage;
        simulatorState.distance = safeDistance;
        if (simulatorState.forceMethod === "u-method") {
            simulatorState.field = safeVoltage / safeDistance;
        } else {
            simulatorState.field = safeField;
        }
    }

    if (simulatorState.mode === "charge") {
        simulatorState.field = safeField;
        const forceRead = readManualValue(forceInput, forceUnit, 0, 1e-12, 1e12);
        if (forceRead.state === "valid") {
            applyForceToChargeMagnitude(forceRead.value);
        }
    }

    simulatorState.chargeMagnitude = clampPositive(simulatorState.chargeMagnitude, 2e-7, 1e-12, 1);
}

function syncManualInput(input, select, baseValue) {
    if (input.dataset.editing === "true") return;
    input.value = inputNumberString(convertFromBase(baseValue, select));
    setInputState(input, "ready");
}

function paintRange(range) {
    const min = Number(range.min);
    const max = Number(range.max);
    const value = Number(range.value);
    const progress = max === min ? 0 : ((value - min) / (max - min)) * 100;

    range.style.setProperty("--range-fill", `${clamp(progress, 0, 100).toFixed(2)}%`);
}

function syncSliderState() {
    const computedKey = formulaModes[simulatorState.mode].output;
    const isForceMode = simulatorState.mode === "force";
    const isChargeMode = simulatorState.mode === "charge";
    const useEMethod = simulatorState.forceMethod === "e-method";

    voltageRange.disabled = computedKey === "voltage" || (isForceMode && useEMethod);
    distanceRange.disabled = computedKey === "distance" || (isForceMode && useEMethod);

    voltageRange.value = `${clamp(simulatorState.voltage, Number(voltageRange.min), Number(voltageRange.max))}`;

    const distanceInCm = simulatorState.distance * 100;
    distanceRange.value = `${clamp(distanceInCm, Number(distanceRange.min), Number(distanceRange.max))}`;

    voltageInput.disabled = computedKey === "voltage" || (isForceMode && useEMethod);
    distanceInput.disabled = computedKey === "distance" || (isForceMode && useEMethod);
    fieldInput.disabled = computedKey === "field" || (isForceMode && !useEMethod);
    forceInput.disabled = computedKey === "force";
    chargeMagnitudeInput.disabled = computedKey === "charge";

    voltageCard.classList.toggle("is-computed", computedKey === "voltage" || (isForceMode && useEMethod));
    distanceCard.classList.toggle("is-computed", computedKey === "distance" || (isForceMode && useEMethod));
    fieldCard.classList.toggle("is-computed", computedKey === "field" || (isForceMode && !useEMethod));
    chargeCard?.classList.toggle("is-computed", computedKey === "charge");

    paintRange(voltageRange);
    paintRange(distanceRange);
}

function updateVisualState() {
    const isPositive = simulatorState.charge === "positive";
    const directionLabel = isPositive ? "C\u00f9ng chi\u1ec1u E" : "Ng\u01b0\u1ee3c chi\u1ec1u E";
    const forceDirectionLabel = isPositive ? "L\u1ef1c c\u00f9ng chi\u1ec1u E" : "L\u1ef1c ng\u01b0\u1ee3c chi\u1ec1u E";
    const visualDistance = clamp(simulatorState.distance, 0.005, 0.18);
    const distanceRatio = (visualDistance - 0.005) / 0.175;
    const plateInset = 124 - distanceRatio * 58;
    const fieldInset = plateInset + 52;
    const compactFieldInset = plateInset + 32;
    const sizeFactor = Math.log10(simulatorState.chargeMagnitude / 1e-10 + 1);
    const chargeSize = clamp(62 + sizeFactor * 12, 62, 118);
    const chargeFontSize = clamp(chargeSize * 0.31, 20, 38);
    const chargeHalo = clamp(chargeSize * 0.22, 14, 30);
    const travelLimit = clamp(24 + distanceRatio * 36, 24, 60);
    const fieldFactor = clamp(simulatorState.field / 12000, 0, 1.15);
    const chargeShiftMagnitude = clamp(18 + fieldFactor * 18 + distanceRatio * 10, 18, travelLimit);
    const chargeShift = isPositive ? chargeShiftMagnitude : -chargeShiftMagnitude;

    root.dataset.charge = simulatorState.charge;
    root.style.setProperty("--plate-inset", `${plateInset.toFixed(1)}px`);
    root.style.setProperty("--field-inset", `${fieldInset.toFixed(1)}px`);
    root.style.setProperty("--field-inset-compact", `${compactFieldInset.toFixed(1)}px`);
    root.style.setProperty("--charge-size", `${chargeSize.toFixed(1)}px`);
    root.style.setProperty("--charge-font-size", `${chargeFontSize.toFixed(1)}px`);
    root.style.setProperty("--charge-halo", `${chargeHalo.toFixed(1)}px`);
    root.style.setProperty("--charge-shift", `${chargeShift.toFixed(1)}px`);
    root.style.setProperty("--plate-glow", `${(0.35 + distanceRatio * 0.55).toFixed(2)}`);

    chargeValue.textContent = isPositive ? "q d\u01b0\u01a1ng" : "q \u00e2m";
    forceDirection.textContent = directionLabel;
    heroDirection.textContent = forceDirectionLabel;
    heroCharge.textContent = isPositive ? "q+" : "q-";
    simCharge.textContent = isPositive ? "q+" : "q-";
    simArrow.textContent = isPositive ? "F \u2193" : "F \u2191";
    simHint.textContent = isPositive
        ? "q d\u01b0\u01a1ng b\u1ecb \u0111\u1ea9y c\u00f9ng chi\u1ec1u \u0111i\u1ec7n tr\u01b0\u1eddng. Khi d thay \u0111\u1ed5i, kho\u1ea3ng gi\u1eefa hai b\u1ea3n c\u1ef1c s\u1ebd \u0111\u1ed5i theo ngay tr\u00ean m\u00f4 ph\u1ecfng."
        : "q \u00e2m b\u1ecb \u0111\u1ea9y ng\u01b0\u1ee3c chi\u1ec1u \u0111i\u1ec7n tr\u01b0\u1eddng. Khi d thay \u0111\u1ed5i, kho\u1ea3ng gi\u1eefa hai b\u1ea3n c\u1ef1c s\u1ebd \u0111\u1ed5i theo ngay tr\u00ean m\u00f4 ph\u1ecfng.";

    updateChargeButtons();
}

function renderSimulation() {
    calculateSimulation();

    const mode = formulaModes[simulatorState.mode];
    let force;

    if (simulatorState.mode === "charge") {
        const forceRead = readManualValue(forceInput, forceUnit, 0, 1e-12, 1e12);
        force = forceRead.state === "valid" ? forceRead.value : simulatorState.field * simulatorState.chargeMagnitude;
    } else {
        force = simulatorState.field * simulatorState.chargeMagnitude;
    }

    const opacity = clamp(simulatorState.field / 11000, 0.28, 1);
    const speed = clamp(8.6 - opacity * 3.3, 3.6, 8.6);
    const glow = clamp(opacity * 0.92, 0.22, 0.92);

    calcModeValue.textContent = mode.label;
    
    forceModeSwitch.style.display = simulatorState.mode === "force" ? "grid" : "none";
    
    if (simulatorState.mode === "force" && simulatorState.forceMethod === "e-method") {
        modeHint.textContent = "Nhập |q| và E, hệ sẽ tính lực điện theo công thức F = |q| × E. Ô viền sáng là đại lượng đang được hệ tự tính.";
    } else if (simulatorState.mode === "charge") {
        modeHint.textContent = "Nhập F và E, hệ sẽ tính điện tích theo công thức q = F / E. Ô viền sáng là đại lượng đang được hệ tự tính.";
    } else {
        modeHint.textContent = mode.note;
    }
    summaryMode.textContent = mode.label;

    syncSliderState();
    syncManualInput(voltageInput, voltageUnit, simulatorState.voltage);
    syncManualInput(distanceInput, distanceUnit, simulatorState.distance);
    syncManualInput(fieldInput, fieldUnit, simulatorState.field);
    syncManualInput(chargeMagnitudeInput, chargeMagnitudeUnit, simulatorState.chargeMagnitude);
    syncManualInput(forceInput, forceUnit, force);

    voltageValue.textContent = formatWithSelectedUnit(simulatorState.voltage, voltageUnit);
    distanceValue.textContent = formatWithSelectedUnit(simulatorState.distance, distanceUnit);
    fieldInputValue.textContent = formatWithSelectedUnit(simulatorState.field, fieldUnit);
    fieldValue.textContent = formatWithSelectedUnit(simulatorState.field, fieldUnit);

    summaryVoltage.textContent = formatWithSelectedUnit(simulatorState.voltage, voltageUnit);
    summaryDistance.textContent = formatWithSelectedUnit(simulatorState.distance, distanceUnit);
    summaryField.textContent = formatWithSelectedUnit(simulatorState.field, fieldUnit);
    summaryForce.textContent = formatForce(force);
    chargeResultValue.textContent = formatWithSelectedUnit(simulatorState.chargeMagnitude, chargeMagnitudeUnit);

    const chargeLabel = `${formatDisplayNumber(convertFromBase(simulatorState.chargeMagnitude, chargeMagnitudeUnit))} ${getSelectedUnitLabel(chargeMagnitudeUnit)}`;
    forceLabel.textContent = "L\u1ef1c \u0111i\u1ec7n F";
    forceValue.textContent = formatForce(force);
    if (forceHint) {
        if (simulatorState.mode === "charge") {
            forceHint.textContent = `Nhập F và E, hệ suy ra |q| = F / E. Hiện tại E = ${formatWithSelectedUnit(simulatorState.field, fieldUnit)}.`;
        } else if (simulatorState.mode === "force") {
            forceHint.textContent = `Nhập F để hệ suy ra E = F / |q|. Hiện tại |q| = ${chargeLabel}.`;
        } else {
            forceHint.textContent = `Có thể nhập F để hệ suy ra |q| khi E đã biết. Hiện tại |q| = ${chargeLabel}.`;
        }
    }

    fieldResultCard?.classList.toggle("is-emphasis", mode.resultKey === "field");
    forceResultCard?.classList.toggle("is-emphasis", mode.resultKey === "force");
    chargeResultCard?.classList.toggle("is-emphasis", mode.resultKey === "charge");

    updateModeButtons();
    updateVisualState();

    root.style.setProperty("--field-opacity", opacity.toFixed(2));
    root.style.setProperty("--field-speed", `${speed.toFixed(2)}s`);
    root.style.setProperty("--field-glow", glow.toFixed(2));
}

function hydrateTheme() {
    const storedTheme = localStorage.getItem("uniform-field-theme");

    if (storedTheme === "light" || storedTheme === "dark") {
        root.dataset.theme = storedTheme;
    }

    themeToggle.textContent = root.dataset.theme === "dark"
        ? "Chuy\u1ec3n sang giao di\u1ec7n s\u00e1ng"
        : "Chuy\u1ec3n sang giao di\u1ec7n t\u1ed1i";
}

function toggleTheme() {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("uniform-field-theme", root.dataset.theme);
    hydrateTheme();
}

function updateFromVoltageRange() {
    if (formulaModes[simulatorState.mode].output === "voltage") return;

    simulatorState.voltage = clampPositive(Number(voltageRange.value), simulatorState.voltage, 1e-9, 1e8);
    renderSimulation();
}

function updateFromDistanceRange() {
    if (formulaModes[simulatorState.mode].output === "distance") return;

    simulatorState.distance = clampPositive(Number(distanceRange.value) / 100, simulatorState.distance, 1e-6, 100);
    renderSimulation();
}

function commitManualBinding(binding) {
    if (binding.key !== "chargeMagnitude" && formulaModes[simulatorState.mode].output === binding.key) {
        renderSimulation();
        return;
    }

    const nextValue = readManualValue(
        binding.input,
        binding.select,
        simulatorState[binding.key],
        binding.minimum,
        binding.maximum
    );

    if (nextValue.state === "valid") {
        if (binding.key === "force") {
            if (simulatorState.mode === "force") {
                applyForceToField(nextValue.value);
            } else {
                applyForceToChargeMagnitude(nextValue.value);
            }
        } else {
            simulatorState[binding.key] = nextValue.value;
        }
    }

    setInputState(binding.input, "ready");
    renderSimulation();
}

function updateManualBinding(binding) {
    if (binding.key !== "chargeMagnitude" && formulaModes[simulatorState.mode].output === binding.key) return;

    const nextValue = readManualValue(
        binding.input,
        binding.select,
        simulatorState[binding.key],
        binding.minimum,
        binding.maximum
    );

    if (nextValue.state !== "valid") {
        setInputState(binding.input, binding.input.value.trim() ? "editing" : "ready");
        return;
    }

    if (binding.key === "force") {
        if (simulatorState.mode === "force") {
            applyForceToField(nextValue.value);
        } else {
            applyForceToChargeMagnitude(nextValue.value);
        }
    } else {
        simulatorState[binding.key] = nextValue.value;
    }
    setInputState(binding.input, "editing");
    renderSimulation();
}

function attachManualBinding(binding) {
    binding.input.dataset.editing = "false";
    setInputState(binding.input, "ready");

    binding.input.addEventListener("focus", () => {
        binding.input.dataset.editing = "true";
        setInputState(binding.input, "editing");
    });

    binding.input.addEventListener("input", () => {
        updateManualBinding(binding);
    });

    binding.input.addEventListener("blur", () => {
        binding.input.dataset.editing = "false";
        commitManualBinding(binding);
    });

    binding.input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            binding.input.blur();
        }
    });

    binding.select.addEventListener("change", () => {
        commitManualBinding(binding);
    });
}

function dismissLoadingScreen() {
    if (!loadingScreen || loadingScreen.dataset.dismissed === "true") return;

    loadingScreen.dataset.dismissed = "true";
    loadingScreen.classList.add("is-hidden");
    document.body.classList.remove("is-loading");
    window.setTimeout(() => loadingScreen.remove(), 900);
}

function startLoadingSequence() {
    if (!loadingScreen) return;

    const timer = window.setTimeout(dismissLoadingScreen, LOADING_DURATION_MS);

    if (loadingSkip) {
        loadingSkip.addEventListener("click", () => {
            window.clearTimeout(timer);
            dismissLoadingScreen();
        }, { once: true });
    }

    loadingScreen.addEventListener("pointerdown", (event) => {
        if (event.target !== loadingScreen) return;
        window.clearTimeout(timer);
        dismissLoadingScreen();
    });
}

chapterNav.addEventListener("click", (event) => {
    const button = event.target.closest("[data-chapter-index]");
    if (!button) return;

    setActiveChapter(Number(button.dataset.chapterIndex));
});

faqList.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-faq-index]");
    if (!trigger) return;

    const item = trigger.closest(".faq-item");
    const shouldOpen = !item.classList.contains("is-open");

    faqList.querySelectorAll(".faq-item.is-open").forEach((openItem) => {
        if (openItem === item) return;
        setFaqItemState(openItem, false);
    });

    setFaqItemState(item, shouldOpen);
});

practiceList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-practice-index]");
    if (!button) return;

    const card = button.closest(".practice-card");
    const shouldOpen = !card.classList.contains("is-open");
    setPracticeCardState(card, shouldOpen);
});

chargeSwitch.addEventListener("click", (event) => {
    const button = event.target.closest("[data-charge]");
    if (!button) return;

    simulatorState.charge = button.dataset.charge;
    renderSimulation();
});

calcModeSwitch.addEventListener("click", (event) => {
    const button = event.target.closest("[data-calc-mode]");
    if (!button) return;

    simulatorState.mode = button.dataset.calcMode;
    renderSimulation();
});

forceModeSwitch.addEventListener("click", (event) => {
    const button = event.target.closest("[data-force-mode]");
    if (!button) return;

    simulatorState.forceMethod = button.dataset.forceMode;
    renderSimulation();
});

themeToggle.addEventListener("click", toggleTheme);
if (fxToggle) {
    fxToggle.addEventListener("click", toggleEffects);
}
voltageRange.addEventListener("input", updateFromVoltageRange);
distanceRange.addEventListener("input", updateFromDistanceRange);
manualBindings.forEach(attachManualBinding);

window.addEventListener("pointermove", syncCursorGlow, { passive: true });

hydrateTheme();
hydrateEffectsState();
renderFaqs();
renderPracticeItems();
setActiveChapter(0);
renderSimulation();
refreshEnhancements();
startLoadingSequence();

if (!motionObserver) {
    document.querySelectorAll(".motion-target").forEach((node) => node.classList.add("is-visible"));
}

makeStars();
typesetMath(document.body);

if (mathJaxScript) {
    mathJaxScript.addEventListener("load", () => {
        typesetMath(document.body);
    }, { once: true });
}
