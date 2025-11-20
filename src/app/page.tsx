"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Crown, Mountain, Utensils, Sparkles, Star, Bed, Award, Clock, Heart, Trophy, Users, MessageCircle, HelpCircle, BookOpen, Linkedin, Instagram, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="large"
      background="fluid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635002895-q20tcvax.jpg"
          logoAlt="Swiss Luxury Hotel Logo"
          brandName="Château Alpin"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="CHÂTEAU ALPIN"
          description="Experience unparalleled luxury in the heart of the Swiss Alps. Where timeless elegance meets modern comfort."
          buttons={[
            {
              text: "Reserve Suite",
              href: "contact"
            },
            {
              text: "Explore Hotel",
              href: "about"
            }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635003416-hqhup8wy.jpg",
              imageAlt: "Luxury suite interior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635004090-g73fwoy4.jpg",
              imageAlt: "Swiss mountain hotel exterior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635004602-e75nyz0i.jpg",
              imageAlt: "Spa wellness facilities"
            }
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
        />
      </div>
      
      <div id="about" data-section="about">
        <AboutFeature
          title="Nestled in the majestic Swiss Alps, Château Alpin represents the pinnacle of luxury hospitality. Our heritage of excellence spans generations, offering discerning guests an extraordinary escape where Swiss precision meets timeless elegance."
          features={[
            {
              icon: Crown,
              title: "Royal Heritage",
              description: "A storied history of hosting royalty and dignitaries, with traditions of excellence passed down through generations."
            },
            {
              icon: Mountain,
              title: "Alpine Paradise",
              description: "Breathtaking mountain vistas from every room, surrounded by pristine Swiss wilderness and world-class ski slopes."
            },
            {
              icon: Utensils,
              title: "Culinary Mastery",
              description: "Michelin-starred dining experiences featuring the finest Swiss and international cuisine crafted by renowned chefs."
            },
            {
              icon: Sparkles,
              title: "Bespoke Service",
              description: "Personalized concierge services and attention to detail that anticipates your every need and desire."
            }
          ]}
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardEight
          title="Exceptional Services"
          description="Discover the world-class amenities and services that define the Château Alpin experience"
          tag="Hotel Services"
          tagIcon={Star}
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Personal Concierge",
              description: "24/7 dedicated concierge service to arrange everything from private helicopter tours to exclusive restaurant reservations",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635005199-i9escn6t.jpg",
              imageAlt: "Personal concierge service"
            },
            {
              id: 2,
              title: "Alpine Spa Sanctuary",
              description: "Award-winning spa featuring Swiss wellness traditions, thermal pools, and treatments using local alpine ingredients",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635005925-xhiz5wr9.jpg",
              imageAlt: "Alpine spa facilities"
            },
            {
              id: 3,
              title: "Gourmet Dining",
              description: "Multiple award-winning restaurants offering everything from traditional Swiss cuisine to innovative international flavors",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635006649-mth77ow9.jpg",
              imageAlt: "Fine dining restaurant"
            },
            {
              id: 4,
              title: "Luxury Accommodations",
              description: "Elegantly appointed suites with panoramic mountain views, marble bathrooms, and premium Swiss linens",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635007389-t5v9fjv7.jpg",
              imageAlt: "Luxury hotel suite"
            }
          ]}
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Luxury Accommodations"
          description="Choose from our collection of exquisitely appointed suites and rooms"
          tag="Room Rates"
          tagIcon={Bed}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "1",
              price: "CHF 1,200",
              name: "Alpine Standard",
              buttons: [
                {
                  text: "Book Now",
                  href: "contact"
                },
                {
                  text: "View Details",
                  href: "#rooms"
                }
              ],
              features: [
                "Mountain view room",
                "Premium Swiss linens",
                "Marble bathroom",
                "24/7 room service",
                "Complimentary breakfast"
              ]
            },
            {
              id: "2",
              badge: "Most Popular",
              badgeIcon: Crown,
              price: "CHF 2,500",
              name: "Deluxe Suite",
              buttons: [
                {
                  text: "Book Now",
                  href: "contact"
                },
                {
                  text: "View Details",
                  href: "#suites"
                }
              ],
              features: [
                "Panoramic mountain views",
                "Private balcony",
                "Living area with fireplace",
                "Butler service",
                "Spa access included",
                "Private dining option"
              ]
            },
            {
              id: "3",
              price: "CHF 8,000",
              name: "Presidential Suite",
              buttons: [
                {
                  text: "Book Now",
                  href: "contact"
                },
                {
                  text: "View Details",
                  href: "#presidential"
                }
              ],
              features: [
                "3-bedroom luxury suite",
                "Private helicopter pad access",
                "Personal chef available",
                "Private wine cellar",
                "Concierge team",
                "Chauffeur service",
                "Private spa treatments"
              ]
            }
          ]}
        />
      </div>
      
      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Excellence by Numbers"
          description="Discover the achievements that define our commitment to luxury hospitality"
          tag="Our Legacy"
          tagIcon={Award}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "125",
              title: "years",
              description: "Of distinguished hospitality service in the Swiss Alps",
              icon: Clock
            },
            {
              id: "2",
              value: "98%",
              title: "satisfaction",
              description: "Guest satisfaction rate with our premium services",
              icon: Heart
            },
            {
              id: "3",
              value: "25",
              title: "awards",
              description: "International hospitality and dining excellence awards",
              icon: Trophy
            },
            {
              id: "4",
              value: "3",
              title: "stars",
              description: "Michelin stars across our restaurants",
              icon: Star
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="The dedicated professionals who ensure your stay exceeds every expectation"
          tag="Leadership"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Laurent Dubois",
              role: "General Manager",
              description: "With over 20 years in luxury hospitality, Laurent oversees every aspect of the Château Alpin experience with Swiss precision and French elegance.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635010920-8hng5j5r.jpg",
              imageAlt: "Laurent Dubois, General Manager",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/laurent-dubois"
                }
              ]
            },
            {
              id: "2",
              name: "Chef Isabella Rossi",
              role: "Executive Chef",
              description: "Michelin-starred chef Isabella brings innovative Alpine cuisine to life, combining traditional Swiss flavors with modern culinary techniques.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635011441-ekhzkab1.jpg",
              imageAlt: "Chef Isabella Rossi",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/chef-isabella"
                }
              ]
            },
            {
              id: "3",
              name: "Marcus Weber",
              role: "Chief Concierge",
              description: "Golden Key member Marcus ensures every guest request is fulfilled with discretion and excellence, from private jet arrangements to rare wine acquisitions.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635012005-jcc105y7.jpg",
              imageAlt: "Marcus Weber, Chief Concierge",
              socialLinks: [
                {
                  icon: Mail,
                  url: "mailto:concierge@chateaualpin.ch"
                }
              ]
            }
          ]}
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardThree
          title="Guest Experiences"
          description="Hear from our distinguished guests about their unforgettable stays"
          tag="Testimonials"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Elizabeth Hartwell",
              handle: "@elizabethhartwell",
              testimonial: "Château Alpin redefined luxury for me. Every detail was perfect, from the breathtaking mountain views to the impeccable service. Truly a once-in-a-lifetime experience.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635012553-2clizywi.jpg",
              imageAlt: "Elizabeth Hartwell"
            },
            {
              id: "2",
              name: "James Morrison",
              handle: "@jamesmorrison_ceo",
              testimonial: "As someone who travels extensively for business, I can confidently say Château Alpin offers the finest hospitality I've ever experienced. The attention to detail is extraordinary.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635013294-eq4plch5.jpg",
              imageAlt: "James Morrison"
            },
            {
              id: "3",
              name: "Sophie & David Chen",
              handle: "@chen_adventures",
              testimonial: "Our honeymoon at Château Alpin was magical. The romantic mountain setting, world-class dining, and personalized service made it absolutely perfect. We'll treasure these memories forever.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635013921-6cxffv6v.jpg",
              imageAlt: "Sophie and David Chen"
            },
            {
              id: "4",
              name: "The Robinson Family",
              handle: "@robinsonfamtravel",
              testimonial: "Finding a luxury hotel that caters beautifully to families is rare. Château Alpin exceeded our expectations with activities for the children and relaxation for the adults. Perfection.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635014686-mt44ctrc.jpg",
              imageAlt: "Robinson Family"
            }
          ]}
        />
      </div>
      
      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Recognized Excellence"
          description="Trusted by prestigious organizations and celebrated by the world's leading hospitality authorities"
          tag="Awards & Recognition"
          tagIcon={Award}
          textboxLayout="default"
          speed={35}
          showCard={true}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635015655-b234xx5z.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635016344-uftt2qe7.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635017022-ogp06rwe.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635017878-38li56el.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635019887-slehvubl.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635020749-a4ti40hy.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635021603-t5t4ih7r.jpg"
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about your luxury stay at Château Alpin"
          tag="Guest Information"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What is included in the room rates?",
              content: "All rooms include premium Swiss linens, marble bathrooms, 24/7 room service, complimentary Wi-Fi, daily housekeeping, access to fitness facilities, and a welcome amenity. Breakfast is included with most room categories."
            },
            {
              id: "2",
              title: "Do you offer airport transfer services?",
              content: "Yes, we provide luxury airport transfers via helicopter or private car service. Our concierge team can arrange transfers from Zurich, Geneva, or any regional airport. Advanced booking is recommended."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "Château Alpin features three award-winning restaurants: our Michelin-starred Alpine Grill, the casual Terrace Café with mountain views, and our exclusive Wine Cellar for private dining experiences. Room service is available 24/7."
            },
            {
              id: "4",
              title: "Are pets allowed at the hotel?",
              content: "We welcome well-behaved pets in designated pet-friendly suites. Additional charges apply, and advance notice is required. Our concierge can arrange pet sitting services and recommend local veterinarians if needed."
            },
            {
              id: "5",
              title: "What activities are available year-round?",
              content: "Seasonal activities include world-class skiing and snowboarding in winter, hiking and mountain biking in summer. Year-round amenities include our spa, indoor pool, fitness center, wine tastings, and cultural excursions to nearby villages."
            },
            {
              id: "6",
              title: "What is your cancellation policy?",
              content: "Standard reservations may be cancelled up to 48 hours before arrival without penalty. Suites and packages may have different policies. We recommend purchasing travel insurance for maximum flexibility."
            }
          ]}
        />
      </div>
      
      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Hotel Journal"
          description="Discover the stories, experiences, and insights from Château Alpin"
          tag="Latest Updates"
          tagIcon={BookOpen}
          textboxLayout="default"
          animationType="slide-up"
          carouselMode="buttons"
          blogs={[
            {
              id: "1",
              category: "Alpine Adventure",
              title: "Discovering Hidden Gems in the Swiss Alps",
              excerpt: "Explore secret hiking trails and breathtaking viewpoints known only to locals, guided by our expert concierge team.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635022358-qfos8qom.jpg",
              imageAlt: "Swiss Alps mountain trails",
              authorName: "Marcus Weber",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635012005-jcc105y7.jpg",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Culinary Excellence",
              title: "A Michelin Star Journey Through Alpine Cuisine",
              excerpt: "Join Chef Isabella Rossi as she shares the inspiration behind our award-winning mountain-to-table dining experience.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635023152-lh2o5ikx.jpg",
              imageAlt: "Michelin star alpine cuisine",
              authorName: "Isabella Rossi",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635011441-ekhzkab1.jpg",
              date: "12 Jan 2025"
            },
            {
              id: "3",
              category: "Wellness",
              title: "The Art of Swiss Spa Rituals",
              excerpt: "Discover the ancient wellness traditions that inspire our spa treatments, featuring local alpine ingredients and time-honored techniques.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635023714-3ufechxu.jpg",
              imageAlt: "Swiss spa wellness treatments",
              authorName: "Laurent Dubois",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635010920-8hng5j5r.jpg",
              date: "08 Jan 2025"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Reserve Your Alpine Experience"
          description="Contact our reservations team to plan your perfect luxury getaway in the Swiss Alps. Our concierge will personally assist with every detail of your stay."
          buttonText="Send Inquiry"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "dates",
              type: "text",
              placeholder: "Preferred Dates",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your ideal stay - room preferences, special occasions, or any special requests...",
            rows: 5,
            required: true
          }}
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="CHÂTEAU ALPIN"
          columns={[
            {
              items: [
                {
                  label: "About Hotel",
                  href: "about"
                },
                {
                  label: "Accommodations",
                  href: "#rooms"
                },
                {
                  label: "Dining",
                  href: "#restaurants"
                },
                {
                  label: "Spa & Wellness",
                  href: "#spa"
                }
              ]
            },
            {
              items: [
                {
                  label: "Reservations",
                  href: "contact"
                },
                {
                  label: "Concierge Services",
                  href: "#concierge"
                },
                {
                  label: "Events & Meetings",
                  href: "#events"
                },
                {
                  label: "Gift Cards",
                  href: "#gifts"
                }
              ]
            },
            {
              items: [
                {
                  label: "Awards & Recognition",
                  href: "#awards"
                },
                {
                  label: "Hotel Journal",
                  href: "#blog"
                },
                {
                  label: "Press & Media",
                  href: "#press"
                },
                {
                  label: "Careers",
                  href: "#careers"
                }
              ]
            },
            {
              items: [
                {
                  label: "Contact Information",
                  href: "contact"
                },
                {
                  label: "Location & Access",
                  href: "#location"
                },
                {
                  label: "Privacy Policy",
                  href: "#privacy"
                },
                {
                  label: "Terms of Service",
                  href: "#terms"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}