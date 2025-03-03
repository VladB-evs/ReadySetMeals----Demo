import html2pdf from 'html2pdf.js';

/**
 * Generates a PDF from the meal plan data
 * @param {Object} mealPlan - The meal plan object
 * @param {string} fileName - The name of the file to download (default: 'meal-plan.pdf')
 */
export const generateMealPlanPDF = (mealPlan, fileName = 'meal-plan.pdf') => {
  // Create a clean container for the PDF content
  const element = document.createElement('div');
  element.style.width = '100%';
  element.style.padding = '20px';
  element.style.backgroundColor = '#ffffff';
  element.style.fontFamily = 'Arial, sans-serif';

  // Add title
  const title = document.createElement('h1');
  title.textContent = 'Your Weekly Meal Plan';
  title.style.textAlign = 'center';
  title.style.color = '#1d1d1f';
  title.style.marginBottom = '20px';
  element.appendChild(title);

  // Add subtitle with date
  const subtitle = document.createElement('p');
  subtitle.textContent = `Generated on ${new Date().toLocaleDateString()}`;
  subtitle.style.textAlign = 'center';
  subtitle.style.color = '#86868b';
  subtitle.style.marginBottom = '30px';
  element.appendChild(subtitle);

  // Days of the week and meal types
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];

  // Create a page for each day
  daysOfWeek.forEach((day, index) => {
    // Create a page container for each day
    const pageContainer = document.createElement('div');
    pageContainer.style.width = '100%';
    pageContainer.style.pageBreakAfter = index < daysOfWeek.length - 1 ? 'always' : 'auto';
    pageContainer.style.minHeight = '90vh'; // Ensure content fills most of the page
    pageContainer.style.display = 'flex';
    pageContainer.style.flexDirection = 'column';
    
    // Day header - make it more prominent for each page
    const dayHeader = document.createElement('h2');
    dayHeader.textContent = day;
    dayHeader.style.color = '#1d1d1f';
    dayHeader.style.fontSize = '28px';
    dayHeader.style.marginTop = '20px';
    dayHeader.style.marginBottom = '20px';
    dayHeader.style.paddingBottom = '10px';
    dayHeader.style.borderBottom = '3px solid #0071e3';
    dayHeader.style.textAlign = 'center';
    pageContainer.appendChild(dayHeader);

    // Create table for meals
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    table.style.marginBottom = '20px';
    table.style.flexGrow = '1';

    // Create table body
    const tbody = document.createElement('tbody');

    // Add rows for each meal type
    mealTypes.forEach(mealType => {
      const row = document.createElement('tr');
      
      // Meal type cell
      const typeCell = document.createElement('td');
      typeCell.textContent = mealType;
      typeCell.style.padding = '16px';
      typeCell.style.fontWeight = 'bold';
      typeCell.style.width = '130px';
      typeCell.style.color = '#0071e3';
      typeCell.style.verticalAlign = 'top';
      typeCell.style.fontSize = '18px';
      row.appendChild(typeCell);
      
      // Meal content cell
      const contentCell = document.createElement('td');
      contentCell.textContent = mealPlan[day.toLowerCase()]?.[mealType.toLowerCase()] || 'No meal planned';
      contentCell.style.padding = '16px';
      contentCell.style.color = '#1d1d1f';
      contentCell.style.fontSize = '16px';
      contentCell.style.lineHeight = '1.5';
      row.appendChild(contentCell);
      
      tbody.appendChild(row);
      
      // Add a subtle divider between rows (except the last one)
      if (mealType !== mealTypes[mealTypes.length - 1]) {
        const dividerRow = document.createElement('tr');
        const dividerCell = document.createElement('td');
        dividerCell.colSpan = 2;
        dividerCell.style.borderBottom = '1px solid #f5f5f7';
        dividerCell.style.padding = '0';
        dividerRow.appendChild(dividerCell);
        tbody.appendChild(dividerRow);
      }
    });

    table.appendChild(tbody);
    pageContainer.appendChild(table);
    
    // Add day-specific footer
    const dayFooter = document.createElement('div');
    dayFooter.style.marginTop = 'auto';
    dayFooter.style.textAlign = 'center';
    dayFooter.style.color = '#86868b';
    dayFooter.style.fontSize = '12px';
    dayFooter.style.padding = '10px 0';
    dayFooter.textContent = `${day} - Your ReadySetMeals Plan`;
    pageContainer.appendChild(dayFooter);
    
    element.appendChild(pageContainer);
  });

  // Add footer
  const footer = document.createElement('div');
  footer.style.marginTop = '40px';
  footer.style.textAlign = 'center';
  footer.style.color = '#86868b';
  footer.style.fontSize = '12px';
  footer.textContent = '© 2025 ReadySetMeals. All rights reserved.';
  element.appendChild(footer);

  // PDF generation options
  const opt = {
    margin: [10, 10],
    filename: fileName,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  // Generate and download the PDF
  html2pdf().set(opt).from(element).save();
};