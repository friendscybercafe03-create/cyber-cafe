<script>
    document.addEventListener('DOMContentLoaded', () => {
        const contactForm = document.querySelector('form');
        const submitBtn = document.querySelector('.submit-btn');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Page reload hone se rokne ke liye

            // 1. Button Loading State
            const originalText = submitBtn.innerText;
            submitBtn.innerText = "SENDING...";
            submitBtn.style.opacity = "0.7";
            submitBtn.disabled = true;

            // Form Data Collect karna
            const formData = {
                name: this.querySelector('input[type="text"]').value,
                email: this.querySelector('input[type="email"]').value,
                subject: this.querySelector('select').value,
                message: this.querySelector('textarea').value
            };

            // 2. Simulation (Server par data bhejne ka dikhava)
            // Asli server hone par yahan fetch() API ka use hota hai
            setTimeout(() => {
                // Success Alert
                alert(`Dhanyawad ${formData.name}! Aapka message humein mil gaya hai. Hum jald hi aap se sampark karenge.`);
                
                // Form Reset karna
                contactForm.reset();
                
                // Button ko wapas normal karna
                submitBtn.innerText = originalText;
                submitBtn.style.opacity = "1";
                submitBtn.disabled = false;
                
                console.log("Form Submitted:", formData);
            }, 2000); 
        });

        // 3. Input Focus Effects (Optional - for extra glow)
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.style.transition = "0.3s";
                // Aap yahan label ka color change kar // Form submit hone par kya hoga, uska logic
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('form');
    const submitBtn = document.querySelector('.submit-btn');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Page reload hone se rokta hai

        // 1. Loading State dikhana
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "SENDING...";
        submitBtn.style.opacity = "0.7";
        submitBtn.disabled = true;

        // 2. Form se data nikalna
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;

        // 3. Fake API Call (Simulation)
        // Yahan aap real database ya EmailJS use kar sakte hain
        setTimeout(() => {
            // Success Message
            alert(`Dhanyawad ${name}! Aapka message mil gaya hai. Hum jald hi ${email} par sampark karenge.`);
            
            // Form reset karna
            contactForm.reset();
            
            // Button wapas normal karna
            submitBtn.innerText = originalText;
            submitBtn.style.opacity = "1";
            submitBtn.disabled = false;
        }, 2000); 
    });

    // Hover effect for Info Boxes (Optional)
    const infoBoxes = document.querySelectorAll('.info-box');
    infoBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.boxShadow = "0 0 15px rgba(0, 242, 255, 0.3)";
        });
        box.addEventListener('mouseleave', () => {
            box.style.boxShadow = "none";
        });
    });
});sakte hain
            });
        });
    });
</script>