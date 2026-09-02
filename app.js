const stops = [
  {
    id: "dreamscape",
    order: 1,
    title: "Dreamscape",
    short: "Dreamscape",
    terminal: "T2",
    level: "Level 2",
    location: "Near F gates",
    start: 385,
    end: 402,
    time: "06:25–06:42",
    duration: "17 min",
    description: "An indoor garden of 20,000 plants, a fish pond and a digital sky. Its sound-and-light sequence runs at 15-minute intervals.",
    action: "Walk the glass path and catch one digital-sky change.",
    hours: "Open 24 hours",
    source: "https://www.changiairport.com/en/experience/attractions-directory/dreamscape.html",
    x: 82,
    y: 500,
    labelX: 75,
    labelY: 528
  },
  {
    id: "sunflower",
    order: 2,
    title: "Sunflower Garden",
    short: "Sunflower",
    terminal: "T2",
    level: "Level 3",
    location: "Rooftop in the T2 transit area",
    start: 402,
    end: 417,
    time: "06:42–06:57",
    duration: "15 min",
    description: "A bright open-air rooftop garden with nursery-grown sunflowers and views across the runway and aircraft stands.",
    action: "Go upstairs, take the runway photo, then return to Level 2.",
    hours: "Open 24 hours",
    source: "https://www.changiairport.com/en/experience/attractions-directory/sunflower-garden.html",
    x: 128,
    y: 555,
    labelX: 128,
    labelY: 585
  },
  {
    id: "gourmet",
    order: 3,
    title: "Gourmet Garden breakfast",
    short: "Gourmet",
    terminal: "T2",
    level: "Level 2",
    location: "Departure transit hall",
    start: 417,
    end: 442,
    time: "06:57–07:22",
    duration: "25 min",
    description: "A landscaped dining area with panoramic apron views. Use this as the main breakfast stop so the later route stays flexible.",
    action: "Choose a quick meal, refill water, and check the SQ 326 gate.",
    hours: "Venue open; outlet hours vary",
    source: "https://www.changiairport.com/content/dam/changiairport/sg/airport/evergreen/changi-terminals/special-assistance/terminal-pdf/changi-airport-sensory-map-apr-2026-t2.pdf",
    x: 190,
    y: 565,
    labelX: 190,
    labelY: 596
  },
  {
    id: "enchanted",
    order: 4,
    title: "Enchanted Garden",
    short: "Enchanted",
    terminal: "T2",
    level: "Level 2",
    location: "Near E gates",
    start: 442,
    end: 454,
    time: "07:22–07:34",
    duration: "12 min",
    description: "Four stained-glass flower bouquets, floral arches and a koi pond create T2’s quieter garden room.",
    action: "Walk under the arches and pause beside the koi pond.",
    hours: "Open 24 hours",
    source: "https://www.changiairport.com/en/experience/attractions-directory/enchanted-garden.html",
    x: 258,
    y: 540,
    labelX: 258,
    labelY: 570
  },
  {
    id: "bears",
    order: 5,
    title: "2 Bears Hideout",
    short: "2 Bears",
    terminal: "T2",
    level: "Level 2",
    location: "Near E gates",
    start: 454,
    end: 459,
    time: "07:34–07:39",
    duration: "5 min",
    description: "An airside bear-themed play area with windows onto aircraft movements. The play equipment is designed for children aged 6–12.",
    action: "Adults: make this a quick photo and aircraft-viewing stop.",
    hours: "Open daily",
    note: "Optional detail: skip if crowded or if you are not travelling with a child.",
    optional: true,
    source: "https://www.changiairport.com/en/at-changi/facilities-and-services-directory/play-area.html",
    x: 306,
    y: 502,
    labelX: 306,
    labelY: 532
  },
  {
    id: "vivarium",
    order: 6,
    title: "Tropical Rainforest Vivarium",
    short: "Vivarium",
    terminal: "T1",
    level: "Level 2",
    location: "Near the Skytrain to T2",
    start: 474,
    end: 484,
    time: "07:54–08:04",
    duration: "10 min",
    description: "A planted paludarium combining a miniature rainforest and aquatic habitat, including small forest-stream fish.",
    action: "Look below the waterline—the fish are easy to miss.",
    hours: "Open 24 hours",
    source: "https://www.changiairport.com/en/experience/attractions-directory/tropical-rainforest-vivarium.html",
    x: 500,
    y: 244,
    labelX: 500,
    labelY: 274
  },
  {
    id: "discovery",
    order: 7,
    title: "Discovery Garden",
    short: "Discovery",
    terminal: "T1",
    level: "Level 2",
    location: "Near D gates",
    start: 484,
    end: 496,
    time: "08:04–08:16",
    duration: "12 min",
    description: "Raised walkways wind between tree-like sculptures covered with tropical plants, giving several elevated viewpoints.",
    action: "Take the raised path rather than only viewing it from the concourse.",
    hours: "Open 24 hours",
    source: "https://www.changiairport.com/en/experience/attractions-directory/discovery-garden.html",
    x: 558,
    y: 229,
    labelX: 558,
    labelY: 202
  },
  {
    id: "waterlily",
    order: 8,
    title: "Water Lily Garden",
    short: "Water lily",
    terminal: "T1",
    level: "Level 2",
    location: "Near C gates",
    start: 496,
    end: 507,
    time: "08:16–08:27",
    duration: "11 min",
    description: "A freshwater garden with floating lilies and leaf-shaped shelters arranged around a ripple-like path.",
    action: "Look for the giant Amazon water lily and sacred lotus.",
    hours: "Open 24 hours",
    source: "https://www.changiairport.com/en/experience/attractions-directory/water-lily-garden.html",
    x: 626,
    y: 236,
    labelX: 626,
    labelY: 269
  },
  {
    id: "blooming-bird",
    order: 9,
    title: "One Blooming Bird play area",
    short: "Bird play",
    terminal: "T1",
    level: "Level 2",
    location: "Beside the iShopChangi collection point",
    start: 507,
    end: 512,
    time: "08:27–08:32",
    duration: "5 min",
    description: "A colourful airside play stop designed for children aged 6–12, included so families do not miss the T1 kids’ attraction.",
    action: "Adults: treat this as a quick walk-by on the way to Piazza Garden.",
    hours: "Open daily",
    note: "Optional detail: skip unless travelling with a child or already passing it.",
    optional: true,
    source: "https://www.changiairport.com/en/at-changi/facilities-and-services-directory/play-area.html",
    x: 660,
    y: 239,
    labelX: 660,
    labelY: 205
  },
  {
    id: "piazza",
    order: 10,
    title: "Piazza Garden",
    short: "Piazza",
    terminal: "T1",
    level: "Level 2",
    location: "Central transit area",
    start: 512,
    end: 520,
    time: "08:32–08:40",
    duration: "8 min",
    description: "A changing display of culturally significant plants themed around Singapore’s festivals and seasons.",
    action: "Read the seasonal display card; the planting changes during the year.",
    hours: "Open 24 hours",
    source: "https://www.changiairport.com/content/dam/changiairport/sg/airport/evergreen/changi-terminals/special-assistance/terminal-pdf/Changi-Airport-Sensory-Map-Apr2025-T1.pdf",
    x: 697,
    y: 244,
    labelX: 697,
    labelY: 216
  },
  {
    id: "cactus",
    order: 11,
    title: "Cactus Garden",
    short: "Cactus",
    terminal: "T1",
    level: "Level 3",
    location: "Rooftop near C gates",
    start: 520,
    end: 540,
    time: "08:40–09:00",
    duration: "20 min",
    description: "An open-air rooftop collection of more than 100 cactus and arid-plant species, with broad views of the apron.",
    action: "Find the golden barrel and old man cacti; enjoy the fresh air.",
    hours: "Open 24 hours",
    source: "https://www.changiairport.com/en/experience/attractions-directory/cactus-garden.html",
    x: 746,
    y: 244,
    labelX: 746,
    labelY: 274
  },
  {
    id: "spirit",
    order: 12,
    title: "Spirit of Man sculptures",
    short: "Spirit of Man",
    terminal: "T1",
    level: "Level 2",
    location: "Success at C pier; Achievement at D pier",
    start: 540,
    end: 548,
    time: "09:00–09:08",
    duration: "8 min",
    description: "A paired set of bronze sculptures by Singaporean artist Ng Eng Teng, placed across the C and D piers.",
    action: "Treat these as walk-by art while returning to the T3 Skytrain.",
    hours: "Open 24 hours",
    note: "Optional detail: do not double back if the train is waiting.",
    optional: true,
    source: "https://www.changiairport.com/en/experience/attractions-directory/spirit-of-man.html",
    x: 779,
    y: 258,
    labelX: 790,
    labelY: 294
  },
  {
    id: "crystal",
    order: 13,
    title: "Crystal Garden",
    short: "Crystal",
    terminal: "T3",
    level: "Level 2",
    location: "Central Piazza",
    start: 563,
    end: 573,
    time: "09:23–09:33",
    duration: "10 min",
    description: "Twelve hand-blown dandelion-like glass spheres sit among layered flowering beds in T3’s central piazza.",
    action: "Walk around the spheres—the reflections change from every angle.",
    hours: "Open 24 hours",
    source: "https://www.changiairport.com/en/experience/attractions-directory/crystal-garden.html",
    x: 907,
    y: 410,
    labelX: 916,
    labelY: 442
  },
  {
    id: "birds",
    order: 14,
    title: "Birds in Flight",
    short: "Birds",
    terminal: "T3",
    level: "Level 2",
    location: "Departure transit hall",
    start: 573,
    end: 578,
    time: "09:33–09:38",
    duration: "5 min",
    description: "Baet Yeok Kuan’s coloured steel flock traces the long migratory journey of the Arctic tern.",
    action: "Spot the changing trajectory through the flock as you pass.",
    hours: "Open 24 hours",
    note: "Optional detail: a short art stop on the way to the koi ponds.",
    optional: true,
    source: "https://www.changiairport.com/en/experience/attractions-directory/birds-in-flight.html",
    x: 960,
    y: 450,
    labelX: 960,
    labelY: 481
  },
  {
    id: "vessel",
    order: 15,
    title: "Vessel",
    short: "Vessel",
    terminal: "T3",
    level: "Level 2",
    location: "Departure transit hall",
    start: 578,
    end: 583,
    time: "09:38–09:43",
    duration: "5 min",
    description: "Large stoneware works by master potter Iskandar Jalil interpret Southeast Asian landscape, craft and food culture.",
    action: "Look for the layered surface inspired by kueh lapis cake.",
    hours: "Open 24 hours",
    note: "Optional detail: keep moving if you are behind schedule.",
    optional: true,
    source: "https://www.changiairport.com/en/experience/attractions-directory/vessel.html",
    x: 1000,
    y: 469,
    labelX: 1000,
    labelY: 501
  },
  {
    id: "memory",
    order: 16,
    title: "The Memory of Lived Space",
    short: "Memory",
    terminal: "T3",
    level: "Level 2",
    location: "Near gate holdroom B7",
    start: 583,
    end: 588,
    time: "09:43–09:48",
    duration: "5 min",
    description: "Janet Laurence layers photographs, painted glass, reflections and plants into an artwork that shifts as you move.",
    action: "Only continue to B7 if it is on the way toward your live gate or the Butterfly Garden.",
    hours: "Open 24 hours",
    note: "Optional detail: skip this detour if your departure gate is on the A side.",
    optional: true,
    source: "https://www.changiairport.com/en/experience/attractions-directory/the-memory-of-lived-space.html",
    x: 1041,
    y: 486,
    labelX: 1041,
    labelY: 457
  },
  {
    id: "koi",
    order: 17,
    title: "T3 Koi Ponds",
    short: "Koi ponds",
    terminal: "T3",
    level: "Level 2",
    location: "Two ponds near the A and B gates",
    start: 588,
    end: 600,
    time: "09:48–10:00",
    duration: "12 min",
    description: "Two planted koi ponds create a quiet pause on both sides of the T3 transit hall.",
    action: "See the nearer pond; only cross to the second if it follows your gate direction.",
    hours: "Open 24 hours",
    source: "https://www.changiairport.com/content/dam/changiairport/sg/airport/evergreen/changi-terminals/special-assistance/terminal-pdf/Changi-Airport-Sensory-Map-Apr2025-T3.pdf",
    x: 1080,
    y: 505,
    labelX: 1080,
    labelY: 537
  },
  {
    id: "t3-playground",
    order: 18,
    title: "T3 airside playground",
    short: "Playground",
    terminal: "T3",
    level: "Level 2",
    location: "Departure transit hall near the B gates",
    start: 600,
    end: 605,
    time: "10:00–10:05",
    duration: "5 min",
    description: "An indoor play area for children aged 6–12 near the B-gate side of the terminal.",
    action: "Adults: make it a walk-by while approaching the Butterfly Garden.",
    hours: "Open daily",
    note: "Optional detail: continue directly to the butterflies if you are not with a child.",
    optional: true,
    source: "https://www.changiairport.com/en/at-changi/facilities-and-services-directory/play-area.html",
    x: 1112,
    y: 521,
    labelX: 1112,
    labelY: 492
  },
  {
    id: "butterfly",
    order: 19,
    title: "Butterfly Garden",
    short: "Butterflies",
    terminal: "T3",
    level: "Levels 2 & 3",
    location: "Near B gates",
    start: 605,
    end: 630,
    time: "10:05–10:30",
    duration: "25 min",
    description: "A tropical habitat with flowering plants, a six-metre waterfall and up to 1,000 butterflies from around 40 species.",
    action: "Climb both levels and watch the feeding and breeding enclosures.",
    hours: "Open 24 hours",
    note: "Best daylight stop; butterflies are generally more active from late morning.",
    source: "https://www.changiairport.com/en/experience/attractions-directory/butterfly-garden.html",
    x: 1140,
    y: 542,
    labelX: 1140,
    labelY: 575
  },
  {
    id: "cinema",
    order: 20,
    title: "Free Movie Theatre",
    short: "Cinema",
    terminal: "T3",
    level: "Level 3",
    location: "Transit Central, beside the transit hotel",
    start: 630,
    end: 640,
    time: "10:30–10:40",
    duration: "10 min",
    description: "A free, 24-hour cinema with roughly 50 seats and a rotating programme. Your Monday visit avoids Thursday maintenance.",
    action: "Peek at the schedule or use this as a 15-minute seated rest—not a full film.",
    hours: "Open 24 hours",
    note: "Optional detail: skip this first if any earlier stop ran long.",
    optional: true,
    source: "https://www.changiairport.com/en/at-changi/facilities-and-services-directory/movie-theatres.html",
    x: 1170,
    y: 572,
    labelX: 1170,
    labelY: 601
  },
  {
    id: "gate",
    order: 21,
    title: "T3 departure gate",
    short: "Gate",
    terminal: "T3",
    level: "Level 2",
    location: "Use the live A/B gate shown on airport screens",
    start: 670,
    end: 695,
    time: "11:10–11:35",
    duration: "25 min",
    description: "Walk to the live SQ 326 gate and complete the gate-side security screening well ahead of boarding.",
    action: "Stop exploring at 11:10 even if you have not finished the checklist.",
    hours: "Hard safety deadline",
    note: "Changi asks passengers to reach the gate no later than 30 minutes before departure; this plan keeps a larger buffer.",
    source: "https://www.changiairport.com/en/fly/departure-guide/checking-in.html",
    x: 1197,
    y: 600,
    labelX: 1197,
    labelY: 635,
    safety: true
  }
];

const travelSegments = [
  { after: "bears", time: "07:39", terminal: "T2→T1", title: "Airside Skytrain to T1", subtitle: "Allow 15 min", description: "Follow the train signs inside the transit hall. Do not descend toward arrivals or immigration." },
  { after: "spirit", time: "09:08", terminal: "T1→T3", title: "Airside Skytrain to T3", subtitle: "Allow 15 min", description: "Confirm T3 on the platform sign. Stay inside the transit system." },
  { after: "cinema", time: "10:40", terminal: "T3", title: "Meal, restroom, prayer or quiet break", subtitle: "30 min buffer", description: "Choose one nearby reset. Recheck the gate. Do not start a sit-down meal after 10:55." }
];

const storageKey = "changi-airside-guide-v1";
const prepStorageKey = "changi-airside-prep-v1";
const journeyStorageKey = "dac-fra-journey-v1";
const arrivalPreferenceKey = "fra-arrival-preferences-v1";
let selectedStopId = "dreamscape";
let activeFilter = "all";

const svgNS = "http://www.w3.org/2000/svg";
const mapPins = document.querySelector("#map-pins");
const panel = {
  terminal: document.querySelector("#panel-terminal"),
  hours: document.querySelector("#panel-hours"),
  number: document.querySelector("#panel-number"),
  title: document.querySelector("#panel-title"),
  description: document.querySelector("#panel-description"),
  time: document.querySelector("#panel-time"),
  location: document.querySelector("#panel-location"),
  action: document.querySelector("#panel-action"),
  source: document.querySelector("#panel-source"),
  visited: document.querySelector("#panel-visited"),
  note: document.querySelector("#panel-note")
};

function loadSet(key) {
  try {
    return new Set(JSON.parse(localStorage.getItem(key) || "[]"));
  } catch {
    return new Set();
  }
}

let visited = loadSet(storageKey);
let prepChecked = loadSet(prepStorageKey);
let journeyChecked = loadSet(journeyStorageKey);

function saveSet(key, set) {
  try {
    localStorage.setItem(key, JSON.stringify([...set]));
  } catch {
    // The guide remains usable when storage is unavailable (for example, in strict private browsing).
  }
}

function minutesToTime(minutes) {
  const hours = Math.floor(minutes / 60).toString().padStart(2, "0");
  const mins = (minutes % 60).toString().padStart(2, "0");
  return `${hours}:${mins}`;
}

function createSvgElement(name, attributes = {}) {
  const element = document.createElementNS(svgNS, name);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

function renderPins() {
  mapPins.replaceChildren();
  stops.forEach((stop) => {
    if (stop.safety) return;
    const group = createSvgElement("g", {
      class: `map-pin${stop.optional ? " optional" : ""}${visited.has(stop.id) ? " visited" : ""}`,
      transform: `translate(${stop.x} ${stop.y})`,
      tabindex: "0",
      role: "button",
      "aria-label": `Stop ${stop.order}: ${stop.title}, ${stop.terminal}`,
      "data-stop-id": stop.id,
      "data-terminal": stop.terminal
    });
    const circle = createSvgElement("circle", { r: "15" });
    const number = createSvgElement("text", { class: "pin-number", x: "0", y: "4", "text-anchor": "middle" });
    number.textContent = stop.order;
    const label = createSvgElement("text", {
      class: "pin-label",
      x: String(stop.labelX - stop.x),
      y: String(stop.labelY - stop.y),
      "text-anchor": "middle"
    });
    label.textContent = stop.short;
    group.append(circle, number, label);
    group.addEventListener("click", () => selectStop(stop.id));
    group.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectStop(stop.id);
      }
    });
    mapPins.append(group);
  });
}

function selectStop(id, options = {}) {
  const stop = stops.find((item) => item.id === id);
  if (!stop) return;
  selectedStopId = id;
  document.querySelectorAll(".map-pin").forEach((pin) => {
    pin.classList.toggle("selected", pin.dataset.stopId === id);
  });
  panel.terminal.textContent = `${stop.terminal} · ${stop.level}`;
  panel.hours.textContent = stop.hours;
  panel.number.textContent = `${stop.safety ? "Safety stop" : `Stop ${stop.order}`}${stop.optional ? " · optional" : ""}`;
  panel.title.textContent = stop.title;
  panel.description.textContent = stop.description;
  panel.time.textContent = `${stop.time} · ${stop.duration}`;
  panel.location.textContent = stop.location;
  panel.action.textContent = stop.action;
  panel.source.href = stop.source;
  panel.visited.checked = visited.has(stop.id);
  panel.note.textContent = stop.note || "";

  if (options.scrollPanel) {
    document.querySelector("#stop-panel").scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function renderTimeline() {
  const timeline = document.querySelector("#timeline");
  timeline.replaceChildren();

  stops.forEach((stop) => {
    const item = document.createElement("li");
    item.className = `timeline-item${visited.has(stop.id) ? " visited" : ""}`;
    item.dataset.stopId = stop.id;
    item.dataset.start = stop.start;
    item.dataset.end = stop.end;
    item.innerHTML = `
      <time class="timeline-time" datetime="2026-10-05T${minutesToTime(stop.start)}:00+08:00">${minutesToTime(stop.start)}</time>
      <span class="timeline-terminal">${stop.terminal}</span>
      <div class="timeline-title-wrap">
        <h3>${stop.order}. ${stop.title}</h3>
        <small>${stop.duration}${stop.optional ? " · optional" : ""}</small>
      </div>
      <p class="timeline-description">${stop.action}</p>
      <label class="timeline-check">
        <input type="checkbox" data-visit-id="${stop.id}" ${visited.has(stop.id) ? "checked" : ""} />
        <span>${visited.has(stop.id) ? "Visited" : "Mark done"}</span>
      </label>`;
    item.querySelector(".timeline-title-wrap").addEventListener("click", () => {
      if (!stop.safety) {
        if (activeFilter !== "all" && activeFilter !== stop.terminal) setFilter("all");
        selectStop(stop.id);
        document.querySelector("#map").scrollIntoView({ behavior: "smooth" });
      }
    });
    item.querySelector(".timeline-title-wrap").style.cursor = stop.safety ? "default" : "pointer";
    timeline.append(item);

    const segment = travelSegments.find((travel) => travel.after === stop.id);
    if (segment) {
      const travel = document.createElement("li");
      travel.className = "timeline-item travel-item";
      travel.dataset.start = Number(segment.time.slice(0, 2)) * 60 + Number(segment.time.slice(3));
      travel.dataset.end = Number(travel.dataset.start) + (segment.subtitle.includes("30") ? 30 : segment.subtitle.includes("7") ? 7 : 15);
      travel.innerHTML = `
        <time class="timeline-time" datetime="2026-10-05T${segment.time}:00+08:00">${segment.time}</time>
        <span class="timeline-terminal">${segment.terminal.includes("→") ? "↗" : segment.terminal}</span>
        <div class="timeline-title-wrap"><h3>${segment.title}</h3><small>${segment.subtitle}</small></div>
        <p class="timeline-description">${segment.description}</p>
        <span aria-hidden="true"></span>`;
      timeline.append(travel);
    }
  });

  timeline.querySelectorAll("input[data-visit-id]").forEach((input) => {
    input.addEventListener("change", () => toggleVisited(input.dataset.visitId, input.checked));
  });
}

function toggleVisited(id, isVisited) {
  if (isVisited) visited.add(id);
  else visited.delete(id);
  saveSet(storageKey, visited);
  renderPins();
  renderTimeline();
  selectStop(selectedStopId);
  updateProgress();
}

function updateProgress() {
  const total = stops.length;
  const complete = stops.filter((stop) => visited.has(stop.id)).length;
  document.querySelector("#progress-text").textContent = `${complete} of ${total} visited`;
  document.querySelector("#progress-bar").style.width = `${(complete / total) * 100}%`;
}

function setFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll(".filter").forEach((button) => {
    const active = button.dataset.filter === filter;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll(".map-pin").forEach((pin) => {
    pin.classList.toggle("dimmed", filter !== "all" && pin.dataset.terminal !== filter);
  });
}

function findCurrentStop(minutes) {
  const directMatch = stops.find((stop) => minutes >= stop.start && minutes < stop.end);
  if (directMatch) return directMatch;
  if (minutes < stops[0].start) return stops[0];
  return stops.find((stop) => stop.start > minutes) || stops.at(-1);
}

function updateClock(minutes) {
  const output = document.querySelector("#simulated-time");
  const status = document.querySelector("#clock-status");
  const slider = document.querySelector("#time-slider");
  const boundedMinutes = Math.max(Number(slider.min), Math.min(Number(slider.max), minutes));
  slider.value = boundedMinutes;
  output.value = minutesToTime(boundedMinutes);

  let message;
  if (boundedMinutes < 385) message = "Transfer first—stay out of immigration";
  else if (boundedMinutes >= 670 && boundedMinutes < 695) message = "Stop exploring—walk to gate security";
  else if (boundedMinutes >= 695 && boundedMinutes < 725) message = "Be inside the gate area now";
  else if (boundedMinutes >= 725) message = "Boarding window—do not leave the gate";
  else {
    const current = findCurrentStop(boundedMinutes);
    message = `${boundedMinutes < current.start ? "Next" : "Now"}: ${current.title}`;
  }
  status.textContent = message;

  const current = findCurrentStop(boundedMinutes);
  document.querySelectorAll(".timeline-item").forEach((item) => {
    const start = Number(item.dataset.start);
    const end = Number(item.dataset.end);
    item.classList.toggle("current", boundedMinutes >= start && boundedMinutes < end);
  });

  if (current && !current.safety) {
    if (activeFilter !== "all" && activeFilter !== current.terminal) setFilter("all");
    selectStop(current.id);
  }
}

function singaporeMinutesNow() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Singapore",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  const tripDate = values.year === "2026" && values.month === "10" && values.day === "05";
  return {
    minutes: Number(values.hour) * 60 + Number(values.minute),
    tripDate
  };
}

function initPrepChecklist() {
  document.querySelectorAll("input[data-prep]").forEach((input) => {
    input.checked = prepChecked.has(input.dataset.prep);
    input.addEventListener("change", () => {
      if (input.checked) prepChecked.add(input.dataset.prep);
      else prepChecked.delete(input.dataset.prep);
      saveSet(prepStorageKey, prepChecked);
    });
  });

  document.querySelector("#reset-checklist").addEventListener("click", () => {
    prepChecked.clear();
    visited.clear();
    saveSet(prepStorageKey, prepChecked);
    saveSet(storageKey, visited);
    document.querySelectorAll("input[data-prep]").forEach((input) => { input.checked = false; });
    renderPins();
    renderTimeline();
    selectStop("dreamscape");
    updateProgress();
  });
}

function initJourneyChecklist() {
  document.querySelectorAll("input[data-journey]").forEach((input) => {
    input.checked = journeyChecked.has(input.dataset.journey);
    input.addEventListener("change", () => {
      if (input.checked) journeyChecked.add(input.dataset.journey);
      else journeyChecked.delete(input.dataset.journey);
      saveSet(journeyStorageKey, journeyChecked);
    });
  });
}

const arrivalCopy = {
  short: {
    label: "Short-stay arrival:",
    note: "Use an EES kiosk if directed, then see a border officer. Expect passport scanning, a facial image and fingerprints; keep your visa and supporting documents ready.",
    step: "Use the EES kiosk if staff direct you, then present your passport and short-stay visa to the officer. Be ready with your address, visit purpose, return plan and proof of funds."
  },
  resident: {
    label: "Long-stay or resident arrival:",
    note: "Long-stay visa and residence-permit holders are generally exempt from EES registration. Show your passport with the valid visa or permit; use EasyPASS only when signs or staff confirm you are eligible.",
    step: "Present your passport with your valid long-stay visa or residence permit. Follow the officer’s lane instructions; eligible German residence-permit holders may be directed to EasyPASS."
  }
};

const arrivalTimes = {
  "short-checked": { customs: "21:15", exit: "21:25" },
  "resident-checked": { customs: "21:00", exit: "21:10" },
  "short-cabin": { customs: "20:45", exit: "20:55" },
  "resident-cabin": { customs: "20:30", exit: "20:40" }
};

let entryMode = "short";
let bagMode = "checked";

function loadArrivalPreferences() {
  try {
    const stored = JSON.parse(localStorage.getItem(arrivalPreferenceKey) || "{}");
    if (stored.entryMode === "resident") entryMode = "resident";
    if (stored.bagMode === "cabin") bagMode = "cabin";
  } catch {
    // Defaults are safe when storage is unavailable.
  }
}

function saveArrivalPreferences() {
  try {
    localStorage.setItem(arrivalPreferenceKey, JSON.stringify({ entryMode, bagMode }));
  } catch {
    // Keep the controls functional without persistence.
  }
}

function updateArrivalPlanner() {
  document.querySelectorAll("[data-entry-mode]").forEach((button) => {
    const active = button.dataset.entryMode === entryMode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll("[data-bag-mode]").forEach((button) => {
    const active = button.dataset.bagMode === bagMode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  const copy = arrivalCopy[entryMode];
  const note = document.querySelector("#entry-mode-note");
  note.querySelector("strong").textContent = copy.label;
  note.querySelector("span").textContent = copy.note;
  document.querySelector("#border-step-copy").textContent = copy.step;

  document.querySelectorAll("[data-checked-bag-step]").forEach((step) => {
    step.classList.toggle("is-hidden", bagMode === "cabin");
  });

  const timing = arrivalTimes[`${entryMode}-${bagMode}`];
  const exitEstimate = document.querySelector("#exit-estimate");
  const briefExit = document.querySelector("#brief-exit-time");
  const customsTime = document.querySelector("#fra-customs-time");
  const exitTime = document.querySelector("#fra-exit-step-time");
  exitEstimate.value = `about ${timing.exit}`;
  briefExit.textContent = timing.exit;
  customsTime.textContent = timing.customs;
  customsTime.dateTime = `2026-10-05T${timing.customs}:00+02:00`;
  exitTime.textContent = timing.exit;
  exitTime.dateTime = `2026-10-05T${timing.exit}:00+02:00`;
  saveArrivalPreferences();
}

function initArrivalPlanner() {
  loadArrivalPreferences();
  document.querySelectorAll("[data-entry-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      entryMode = button.dataset.entryMode;
      updateArrivalPlanner();
    });
  });
  document.querySelectorAll("[data-bag-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      bagMode = button.dataset.bagMode;
      updateArrivalPlanner();
    });
  });
  updateArrivalPlanner();
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

document.querySelector("#next-stop").addEventListener("click", () => {
  const next = stops.find((stop) => !visited.has(stop.id)) || stops[0];
  if (next.safety) {
    document.querySelector(`[data-stop-id="${next.id}"]`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  if (activeFilter !== "all" && activeFilter !== next.terminal) setFilter("all");
  selectStop(next.id, { scrollPanel: true });
  const pin = document.querySelector(`.map-pin[data-stop-id="${next.id}"]`);
  pin?.focus({ preventScroll: true });
});

panel.visited.addEventListener("change", () => toggleVisited(selectedStopId, panel.visited.checked));

document.querySelector("#time-slider").addEventListener("input", (event) => updateClock(Number(event.target.value)));

document.querySelector("#use-live-time").addEventListener("click", () => {
  const now = singaporeMinutesNow();
  updateClock(now.minutes);
  if (!now.tripDate) {
    document.querySelector("#clock-status").textContent = "Not travel day—showing today’s Singapore clock as a rehearsal";
  }
});

renderPins();
renderTimeline();
initPrepChecklist();
initJourneyChecklist();
initArrivalPlanner();
selectStop(selectedStopId);
updateProgress();
updateClock(385);
