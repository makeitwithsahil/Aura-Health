// services/searchService.js
// Handles medicine lookup by name or alias — with searched-term tracking & suggestions

import { medicines } from "../data/medicines";

/**
 * Search medicines by exact name, id, or alias.
 * Returns { med, searchedTerm, isAlias } so the UI can display what the user typed.
 *  - searchedTerm : the original query (capitalised), e.g. "Zerodol", "Crocin"
 *  - isAlias      : true when the user typed an alias, not the primary name
 * @param {string} query
 * @returns {{ med: object, searchedTerm: string, isAlias: boolean } | null}
 */
export function getMedicineByName(query) {
  if (!query || typeof query !== "string") return null;

  const normalized = query.trim().toLowerCase();

  const med = medicines.find(
    (m) =>
      m.id === normalized ||
      m.name.toLowerCase() === normalized ||
      m.aliases.some((alias) => alias.toLowerCase() === normalized)
  );

  if (!med) return null;

  // Capitalise first letter of what the user actually typed
  const searchedTerm =
    query.trim().charAt(0).toUpperCase() + query.trim().slice(1);

  // Is it an alias (not the primary name or id)?
  const isAlias =
    med.name.toLowerCase() !== normalized && med.id !== normalized;

  return { med, searchedTerm, isAlias };
}

/**
 * Live suggestion search — returns up to `limit` matches as the user types.
 * Checks name, id, and every alias with prefix/substring matching.
 * @param {string} query
 * @param {number} limit
 * @returns {Array<{ label: string, value: string, medName: string }>}
 */
export function getSuggestions(query, limit = 8) {
  if (!query || query.trim().length < 1) return [];

  const q = query.trim().toLowerCase();
  const results = [];
  const seen = new Set();

  for (const med of medicines) {
    if (results.length >= limit) break;

    // Check primary name
    const nameLower = med.name.toLowerCase();
    if (nameLower.startsWith(q) || nameLower.includes(q)) {
      if (!seen.has(med.id)) {
        seen.add(med.id);
        results.push({ label: med.name, value: med.name, medName: med.name });
      }
    }

    // Check every alias
    for (const alias of med.aliases) {
      if (results.length >= limit) break;
      const aliasLower = alias.toLowerCase();
      if (aliasLower.startsWith(q) || aliasLower.includes(q)) {
        const key = `${med.id}::${alias}`;
        if (!seen.has(key)) {
          seen.add(key);
          const displayAlias =
            alias.charAt(0).toUpperCase() + alias.slice(1);
          results.push({
            label: displayAlias,
            value: alias,
            medName: med.name,
          });
        }
      }
    }
  }

  // Prefix matches first
  results.sort((a, b) => {
    const aStarts = a.label.toLowerCase().startsWith(q) ? 0 : 1;
    const bStarts = b.label.toLowerCase().startsWith(q) ? 0 : 1;
    return aStarts - bStarts;
  });

  return results.slice(0, limit);
}

/**
 * Get all primary medicine names for the quick-search pill list.
 * @returns {string[]}
 */
export function getAllMedicineNames() {
  return medicines.map((med) => med.name);
}
