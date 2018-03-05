  // parses unified diff
  // http://www.gnu.org/software/diffutils/manual/diffutils.html#Unified-Format
var defaultToWhiteSpace, escapeRegExp, ltrim, makeString, parseFile, parseFileFallback, trimLeft,
  slice = [].slice;
    file.new = true;
      oldStart,
      oldLines,
      newStart,
      newLines
    if (!current) {
      return;
    }
    if (!current) {
      return;
    }
    if (!current) {
      return;
    }
    var recentChange, ref;
    ref = current.changes, [recentChange] = slice.call(ref, -1);
    return current.changes.push({
      type: recentChange.type,
      [`${recentChange.type}`]: true,
      ln1: recentChange.ln1,
      ln2: recentChange.ln2,
      ln: recentChange.ln,
      content: line
    });
  // todo beter regexp to avoid detect normal line starting with diff
// fallback function to overwrite file.from and file.to if executed
  // ignore possible time stamp
  // ignore git prefixes a/ or b/