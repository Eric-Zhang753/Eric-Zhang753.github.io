document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("honors-search");
  const root = document.querySelector(".honors");

  if (!input || !root) {
    return;
  }

  const sections = Array.from(root.querySelectorAll("[data-honor-section]"));
  const emptyState = root.querySelector("[data-honors-empty]");
  const normalize = (value) => value.toLowerCase().trim();

  const filterHonors = () => {
    const query = normalize(input.value);
    let visibleTotal = 0;

    sections.forEach((section) => {
      const items = Array.from(section.querySelectorAll("[data-honor-item]"));
      const sectionTotal = Number(section.dataset.honorTotal || items.length);
      const count = section.querySelector("[data-honor-count]");
      let visibleInSection = 0;

      items.forEach((item) => {
        const isMatch = query === "" || normalize(item.textContent).includes(query);
        item.hidden = !isMatch;

        if (isMatch) {
          visibleInSection += 1;
        }
      });

      section.hidden = visibleInSection === 0;
      visibleTotal += visibleInSection;

      if (count) {
        count.textContent = query === "" ? `${sectionTotal} items` : `${visibleInSection}/${sectionTotal} items`;
      }
    });

    if (emptyState) {
      emptyState.hidden = visibleTotal > 0;
    }
  };

  input.addEventListener("input", filterHonors);
  filterHonors();
});
