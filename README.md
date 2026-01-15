# The Learning Quarters of Owings Mills - Frontend

Modern, responsive React frontend for The Learning Quarters tutoring platform.

## Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with animations and transitions
- **Unsplash** - High-quality stock photography

## Features

- 🎨 Modern, professional design
- 📱 Fully responsive layout
- ✨ Smooth scroll animations
- 🎭 Interactive hover effects
- 🖼️ Real photography integration
- 📝 Consultation request form
- 🌐 API integration with fallback data

## Installation

```bash
cd frontend
npm install
```

## Running the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Environment Variables

Create a `.env` file in the frontend directory:

```env
VITE_API_BASE_URL=http://localhost:4000
```

For production:

```env
VITE_API_BASE_URL=https://your-api-domain.com
```

## Project Structure

```
frontend/
├── src/
│   ├── App.jsx           # Main application component
│   ├── App.css           # Application styles
│   ├── main.jsx          # Entry point
│   ├── index.css         # Global styles
│   └── assets/           # Static assets (SVG icons)
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

## Key Sections

### Hero Section

- Main headline and call-to-action
- Trust indicators (years of experience, students supported, rating)
- Hero image with floating animation

### Features

- Personalized Programs
- Top-Rated Tutors
- Flexible Scheduling

### Subjects

- K-12 Tutoring
- College Tutoring
- Test Preparation

### Tutors

- Profile cards with photos, credentials, and ratings
- Specialty areas highlighted

### Testimonials

- Client reviews from parents and students

### Consultation Form

- Multi-field contact form
- Form validation
- Success/error messaging
- API integration

## Animations

The frontend includes several animation types:

- **Scroll Animations**: Sections fade in as you scroll
- **Hover Effects**: Cards lift and scale on hover
- **Button Effects**: Enhanced interactions with shadows
- **Floating Hero Image**: Subtle continuous animation
- **Logo Animation**: Rotating leaves on hover
- **Icon Rotations**: 360° spins on feature cards

## API Integration

The app fetches data from the backend API for:

- Subjects
- Tutors
- Testimonials
- Consultation submissions

**Fallback Data**: If the API is unavailable, the app uses built-in fallback data to ensure the site remains functional.

## Customization

### Colors

Main brand colors are defined in `App.css`:

```css
Primary Blue: #0f4c81
Secondary Blue: #1b6aa9
Accent Teal: #27a3a3
Light Background: #f7f9fc
```

### Images

Replace Unsplash URLs in `App.jsx` with your own images:

```javascript
// Hero image
src="https://images.unsplash.com/photo-..."

// Subject cards
image: "https://images.unsplash.com/photo-..."

// Tutor avatars
avatar: "https://images.unsplash.com/photo-..."
```

### Content

Update text content directly in `App.jsx`:

- Hero headline and subtitle
- Feature descriptions
- Subject details
- Tutor information
- Testimonials

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images with Unsplash CDN
- CSS animations use GPU acceleration
- Lazy loading for smooth scrolling
- Efficient React rendering with useMemo

## Accessibility

- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard navigation support
- Focus states on interactive elements
- Alt text for all images

## Future Enhancements

- Multi-language support
- Dark mode toggle
- Blog/resources section
- Live chat integration
- Student/parent dashboard
- Online booking system
- Video testimonials
- Advanced search/filtering for tutors
