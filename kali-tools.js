function highlight(param) {

            // Select the whole paragraph
            var ob = new Mark(document.querySelector(".sec"));

            // First unmark the highlighted word or letter
            ob.unmark();

            // Highlight letter or word
            ob.mark(
                document.getElementById("Search-Tag-Codes-Test").value,
                { className: 'a' + param }
            );
        }