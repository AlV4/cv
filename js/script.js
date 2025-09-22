/**
 * Resume Export and Interaction Functions
 * Author: Oleksandr Chernyshenko
 * Version: 3.0 - Clean, data-driven implementation
 */

async function getResumeData() {
    if (resumeData) {
        return resumeData;
    }

    // Fallback: try to fetch data if not available
    try {
        const response = await fetch('data.json');
        resumeData = await response.json();
        return resumeData;
    } catch (error) {
        console.error('Error loading resume data:', error);
        throw new Error('Resume data not available');
    }
}

/**
 * Set resume data (called from HTML after loading JSON)
 */
function setResumeData(data) {
    resumeData = data;
    initializeApp();
}

/**
 * Initialize the application
 */
function initializeApp() {
    if (!resumeData) {
        return;
    }

    setupEventListeners();
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    // Add keyboard accessibility for buttons
    document.querySelectorAll('.export-btn').forEach(btn => {
        btn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });
    });
}

/**
 * Show loading indicator
 */
function showLoading() {
    const loadingElement = document.getElementById('loadingIndicator');
    if (loadingElement) {
        loadingElement.style.display = 'block';
    }
}

/**
 * Hide loading indicator
 */
function hideLoading() {
    const loadingElement = document.getElementById('loadingIndicator');
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }
}

/**
 * Show error message to user
 */
function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #f44336;
        color: white;
        padding: 15px 20px;
        border-radius: 4px;
        z-index: 10000;
        max-width: 300px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    errorDiv.textContent = message;

    document.body.appendChild(errorDiv);

    // Remove the error message after 5 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.parentNode.removeChild(errorDiv);
        }
    }, 5000);
}

/**
 * Export to PDF with optimized settings
 */
async function exportToPDF() {
    showLoading();

    try {
        const data = await getResumeData();
        const element = document.getElementById('resumeContent');
        if (!element) {
            throw new Error('Resume content not found');
        }

        const options = {
            margin: [10, 10, 10, 10],
            filename: data.config.filename.pdf,
            image: {
                type: 'jpeg',
                quality: 0.98
            },
            html2canvas: {
                scale: 2,
                useCORS: true,
                letterRendering: true,
                allowTaint: true
            },
            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait'
            }
        };

        await html2pdf().set(options).from(element).save();

    } catch (error) {
        console.error('Error generating PDF:', error);
        showErrorMessage('Error generating PDF. Please try again.');
    } finally {
        hideLoading();
    }
}

/**
 * Export to Word using pure JavaScript
 */
async function exportToWord() {
    showLoading();

    try {
        const data = await getResumeData();
        const experienceYears = new Date().getFullYear() - data.personal.startYear;

        // Create clean Word-compatible HTML content
        const wordContent = createWordContent(data, experienceYears);

        // Create proper Word document structure
        const wordDocument = createWordDocument(wordContent, data);

        // Download the file
        downloadWordFile(wordDocument, data.config.filename.docx);

    } catch (error) {
        console.error('Word Export Error:', error);
        showErrorMessage('Error generating Word document. Please try again.');
    } finally {
        hideLoading();
    }
}

/**
 * Create Word-compatible HTML content using JSON data
 */
function createWordContent(data, experienceYears) {
    return `
        <div style="font-family: 'Times New Roman', serif; max-width: 700px; margin: 0 auto; padding: 40px 20px;">
            <!-- Header Section -->
            <div style="text-align: center; margin-bottom: 40px; border-bottom: 2px solid #333; padding-bottom: 20px;">
                <h1 style="font-size: 24pt; color: #333; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 2px;">
                    ${data.personal.name}
                </h1>
                <h2 style="font-size: 16pt; color: #666; margin: 0; font-weight: normal;">
                    ${data.personal.title}
                </h2>
            </div>
            
            <!-- Contact Information -->
            <div style="margin-bottom: 30px;">
                <h3 style="font-size: 14pt; color: #333; margin: 0 0 15px 0; text-transform: uppercase; border-bottom: 1px solid #666;">
                    Contact Information
                </h3>
                <table style="width: 100%; border: none;">
                    <tr>
                        <td style="padding: 3px 0; font-size: 11pt;"><strong>Email:</strong></td>
                        <td style="padding: 3px 0; font-size: 11pt;">${data.contact.email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 3px 0; font-size: 11pt;"><strong>LinkedIn:</strong></td>
                        <td style="padding: 3px 0; font-size: 11pt;">${data.contact.linkedin}</td>
                    </tr>
                    <tr>
                        <td style="padding: 3px 0; font-size: 11pt;"><strong>GitHub:</strong></td>
                        <td style="padding: 3px 0; font-size: 11pt;">${data.contact.github}</td>
                    </tr>
                    <tr>
                        <td style="padding: 3px 0; font-size: 11pt;"><strong>Telegram:</strong></td>
                        <td style="padding: 3px 0; font-size: 11pt;">${data.contact.telegram}</td>
                    </tr>
                </table>
            </div>
            
            <!-- Profile Section -->
            <div style="margin-bottom: 30px;">
                <h3 style="font-size: 14pt; color: #333; margin: 0 0 15px 0; text-transform: uppercase; border-bottom: 1px solid #666;">
                    Profile
                </h3>
                <p style="font-size: 11pt; line-height: 1.6; text-align: justify; margin: 0;">
                    ${data.profile.summary.replace('{experience}', experienceYears)}
                </p>
            </div>
            
            <!-- Experience Section -->
            <div style="margin-bottom: 30px;">
                <h3 style="font-size: 14pt; color: #333; margin: 0 0 15px 0; text-transform: uppercase; border-bottom: 1px solid #666;">
                    Professional Experience
                </h3>
                ${data.experience.map(exp => `
                    <div style="margin-bottom: 25px; page-break-inside: avoid;">
                        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 5px;">
                            <h4 style="font-size: 12pt; color: #333; margin: 0; font-weight: bold;">
                                ${exp.title}
                            </h4>
                            <span style="font-size: 10pt; color: #666; font-style: italic;">
                                ${exp.period}
                            </span>
                        </div>
                        <p style="font-size: 11pt; color: #666; margin: 0 0 10px 0; font-style: italic;">
                            ${exp.company}
                        </p>
                        <ul style="margin: 0; padding-left: 20px; font-size: 11pt; line-height: 1.4;">
                            ${exp.responsibilities.map(resp => `
                                <li style="margin-bottom: 6px;">${resp}</li>
                            `).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
            
            <!-- Skills Section -->
            <div style="margin-bottom: 30px;">
                <h3 style="font-size: 14pt; color: #333; margin: 0 0 15px 0; text-transform: uppercase; border-bottom: 1px solid #666;">
                    Technical Skills
                </h3>
                <ul style="margin: 0; padding-left: 20px; font-size: 11pt; line-height: 1.6;">
                    ${data.skills.map(skill => `
                        <li style="margin-bottom: 8px;">${skill}</li>
                    `).join('')}
                </ul>
            </div>
            
            <!-- Education Section -->
            <div style="margin-bottom: 30px;">
                <h3 style="font-size: 14pt; color: #333; margin: 0 0 15px 0; text-transform: uppercase; border-bottom: 1px solid #666;">
                    Education
                </h3>
                ${data.education.map(edu => `
                    <div style="margin-bottom: 15px;">
                        <h4 style="font-size: 12pt; color: #333; margin: 0 0 5px 0; font-weight: bold;">
                            ${edu.degree}
                        </h4>
                        <p style="font-size: 11pt; color: #666; margin: 0; font-style: italic;">
                            ${edu.institution} (${edu.period})
                        </p>
                    </div>
                `).join('')}
            </div>
            
            <!-- Languages Section -->
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 14pt; color: #333; margin: 0 0 15px 0; text-transform: uppercase; border-bottom: 1px solid #666;">
                    Languages
                </h3>
                <ul style="margin: 0; padding-left: 20px; font-size: 11pt; line-height: 1.6;">
                    ${data.languages.map(lang => `
                        <li style="margin-bottom: 6px;"><strong>${lang.language}</strong> - ${lang.level}</li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

/**
 * Create a complete Word document structure
 */
function createWordDocument(content, data) {
    return `
<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office" 
      xmlns:w="urn:schemas-microsoft-com:office:word" 
      xmlns="http://www.w3.org/TR/REC-html40" lang="en">
<head>
    <meta charset="utf-8">
    <title>${data.personal.name} - Resume</title>
    <!--[if gte mso 9]>
    <xml>
        <w:WordDocument>
            <w:View>Print</w:View>
            <w:Zoom>90</w:Zoom>
            <w:DoNotPromptForConvert/>
            <w:DoNotShowRevisions/>
            <w:DoNotPrintRevisions/>
            <w:DoNotShowComments/>
            <w:DoNotShowInsertionsAndDeletions/>
            <w:DoNotShowPropertyChanges/>
            <w:DoNotShowMarkupArea/>
            <w:DoNotShowRuler/>
            <w:DoNotShowGridlines/>
            <w:DoNotShowHeaders/>
            <w:DoNotShowFooters/>
            <w:Compatibility>
                <w:BreakWrappedTables/>
                <w:SnapToGridInCell/>
                <w:WrapTextWithPunct/>
                <w:UseAsianBreakRules/>
            </w:Compatibility>
        </w:WordDocument>
    </xml>
    <![endif]-->
    <style>
        @page {
            size: 8.5in 11in;
            margin: 1in;
        }
        
        @page Section1 {
            size: 8.5in 11in;
            margin: 1in;
        }
        
        div.Section1 {
            page: Section1;
        }
        
        body {
            font-family: 'Times New Roman', serif;
            font-size: 11pt;
            line-height: 1.4;
            color: #000;
            background: white;
        }
        
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Times New Roman', serif;
        }
        
        table {
            border-collapse: collapse;
            border: none;
        }
        
        td {
            border: none;
            vertical-align: top;
        }
        
        ul {
            list-style-type: disc;
        }
        
        li {
            mso-list: l0 level1 lfo1;
        }
    </style>
</head>
<body>
    <div class="Section1">
        ${content}
    </div>
</body>
</html>
    `.trim();
}

/**
 * Download Word file using multiple methods for compatibility
 */
function downloadWordFile(content, filename) {
    try {
        // Method 1: Create blob and use modern download
        const blob = new Blob(['\ufeff', content], {
            type: 'application/msword;charset=utf-8'
        });

        // Check if FileSaver.js is available
        if (typeof saveAs !== 'undefined') {
            saveAs(blob, filename);
            return;
        }

        // Method 2: Create URL and download link
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.style.display = 'none';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Clean up URL
        setTimeout(() => URL.revokeObjectURL(url), 100);

    } catch (error) {
        // Method 3: Fallback using data URL
        try {
            const dataUrl = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(content);
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = filename;
            link.style.display = 'none';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        } catch (fallbackError) {
            console.error('All download methods failed:', fallbackError);
            showErrorMessage('Unable to download Word document. Please try a different browser.');
        }
    }
}

/**
 * Print function for browsers that support it
 */
function printResume() {
    const printStyles = `
        <style type="text/css" media="print">
            body { margin: 0; }
            .export-controls { display: none !important; }
            .wrapper { box-shadow: none; margin: 0; max-width: none; }
            @page { margin: 0.5in; }
        </style>
    `;

    const head = document.head.innerHTML;
    document.head.innerHTML = head + printStyles;

    window.print();

    // Restore original head after printing
    setTimeout(() => {
        document.head.innerHTML = head;
    }, 1000);
}

// Make functions globally available immediately
window.togglePhoto = function() {
    const photo = document.getElementById('profilePhoto');
    const checkbox = document.getElementById('photoToggle');

    if (photo && checkbox) {
        if (checkbox.checked) {
            photo.classList.add('visible');
        } else {
            photo.classList.remove('visible');
        }
    }
};

window.exportToPDF = exportToPDF;
window.exportToWord = exportToWord;
window.printResume = printResume;
window.setResumeData = setResumeData;

// Initialize when DOM is ready (if data is already available)
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure data is loaded
    setTimeout(initializeApp, 100);
});