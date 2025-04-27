/* ================= Intersection Observer ל-Fade-in ================= */

// בוחרים את כל האלמנטים עם class="fade-in"
const fadeInElements = document.querySelectorAll('.fade-in, .fade-in-big');

const observerOptions = {
  threshold: 0.5 // כמה אחוזים מהאלמנט צריך לראות כדי לטריגר "appear"
};

const appearOnScroll = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    // אם האלמנט לא בתוך viewport -> לא עושים כלום
    if (!entry.isIntersecting) return;
    
    // אם הוא כן נכנס, נוסיף את המחלקה appear
    entry.target.classList.add('appear');
    // מפסיקים לצפות בו
    obs.unobserve(entry.target);
  });
}, observerOptions);

// מפעילים את הצופה על כל האלמנטים שמעניינים אותנו
fadeInElements.forEach(el => {
  appearOnScroll.observe(el);
});

document.getElementById("checkers-img").addEventListener("contextmenu", function (event) {
  event.preventDefault(); // מונע פתיחת תפריט קליק ימני
  window.location.href = "checkers.html"; // מעבר לעמוד הפרויקט
});

/* ================== "Load More" Items ================== */
let loading = false;
let currentPage = 1;
const maxPages = 4; // כמה "דפים" נרצה לטעון (כל דף מכיל 3 פריטים)

function loadMoreItems() {
  // אם כבר טוענים או עברנו את המקסימום – לא עושים כלום
  if (loading || currentPage > maxPages) return;

  loading = true;
  document.getElementById('loading').style.display = 'block'; // מציג "טוען..."

  setTimeout(() => {
    const content = document.getElementById('content');

    // הוספת 3 פריטים חדשים
    for (let i = 1; i <= 3; i++) {
      const newItem = document.createElement('div');
      newItem.classList.add('item');
      
      // אם גם את הפריטים החדשים תרצה להחיל עליהם פייד-אין, נוסיף להם fade-in
      newItem.classList.add('fade-in');
      newItem.innerText = `Additional Item ${currentPage * 3 + i}`;

      // מוסיפים ל־DOM
      content.appendChild(newItem);

      // גורמים ל-Intersection Observer לצפות בהם גם כן
      appearOnScroll.observe(newItem);
    }

    loading = false;
    document.getElementById('loading').style.display = 'none'; // מסתיר "טוען..."
    currentPage++;

    // בדיקה האם הגענו למקסימום
    if (currentPage > maxPages) {
      window.onscroll = null; // ביטול אירוע הגלילה לאחר שהגענו למקסימום
    }
  }, 1000); // "השהייה" מלאכותית של שנייה, כדי לדמות טעינה
}

// ברגע שגוללים ומגיעים לתחתית – טוענים עוד פריטים
window.onscroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    loadMoreItems();
  }
};

// טוענים כמה פריטים ראשונים (דף ראשון) בהתחלה
loadMoreItems();
