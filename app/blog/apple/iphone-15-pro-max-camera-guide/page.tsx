import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Complete iPhone 15 Pro Max Camera Guide - Master Every Setting | Quick Solutions Hub",
  description:
    "Learn how to use every camera feature on your iPhone 15 Pro Max. Complete guide covering all modes, settings, and professional photography tips.",
  keywords:
    "iPhone 15 Pro Max camera, iPhone photography, iPhone 15 camera settings, iPhone Pro camera guide, mobile photography",
};

export default function iPhone15ProMaxCameraGuide() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/blog"
                className="text-gray-500 hover:text-primary-600"
              >
                Blog
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link
                  href="/blog/apple"
                  className="text-gray-500 hover:text-primary-600"
                >
                  Apple
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-primary-600 font-medium">
                  iPhone 15 Pro Max Camera Guide
                </span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Article Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-2xl">🍎</span>
            <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
              iPhone 15 Pro Max
            </span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm text-gray-500">15 min read</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            Complete iPhone 15 Pro Max Camera Guide
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Master your iPhone 15 Pro Max camera with our comprehensive guide
            covering all shooting modes, advanced settings, and professional
            photography tips to capture stunning photos and videos.
          </p>

          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
            <span>Published: September 5, 2025</span>
            <span>•</span>
            <span>Updated: September 5, 2025</span>
            <span>•</span>
            <span>iOS 17.0+</span>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            📋 What You'll Learn
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
              Camera app interface and controls
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
              All shooting modes explained
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
              Professional photography settings
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
              Video recording features
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
              Advanced camera settings
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
              Tips for better photos
            </li>
          </ul>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The iPhone 15 Pro Max features one of the most advanced camera
              systems ever put in a smartphone. With its 48MP main camera,
              improved telephoto lens, and powerful computational photography,
              it's capable of capturing professional-quality photos and videos
              that rival dedicated cameras.
            </p>

            <div className="bg-blue-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🎯 Quick Camera Specs
              </h3>
              <ul className="text-gray-700 space-y-1">
                <li>
                  <strong>Main:</strong> 48MP ƒ/1.78 aperture with 2x Telephoto
                  option
                </li>
                <li>
                  <strong>Ultra Wide:</strong> 12MP ƒ/2.2 aperture, 120° field
                  of view
                </li>
                <li>
                  <strong>Telephoto:</strong> 12MP ƒ/2.8 aperture, 3x optical
                  zoom
                </li>
                <li>
                  <strong>Front:</strong> 12MP ƒ/1.9 aperture with autofocus
                </li>
              </ul>
            </div>
          </div>

          {/* Camera Interface */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              📱 Understanding the Camera Interface
            </h2>

            <p className="text-gray-700 mb-6">
              Before diving into advanced features, let's familiarize ourselves
              with the camera interface. The iPhone 15 Pro Max camera app is
              designed to be intuitive while providing access to professional
              controls.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Key Interface Elements:
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    📹 Shooting Modes
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Photo:</strong> Standard photo mode with smart HDR
                    </li>
                    <li>
                      <strong>Portrait:</strong> Depth-of-field effects and
                      lighting
                    </li>
                    <li>
                      <strong>Night:</strong> Automatic low-light photography
                    </li>
                    <li>
                      <strong>Video:</strong> 4K recording up to 60fps
                    </li>
                    <li>
                      <strong>Cinematic:</strong> Shallow depth of field video
                    </li>
                    <li>
                      <strong>Action:</strong> Stabilized recording for movement
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    🔧 Quick Controls
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Zoom:</strong> 0.5x, 1x, 2x, 3x optical options
                    </li>
                    <li>
                      <strong>Flash:</strong> Auto, On, Off modes
                    </li>
                    <li>
                      <strong>Timer:</strong> 3 or 10-second delay
                    </li>
                    <li>
                      <strong>Filters:</strong> Built-in creative effects
                    </li>
                    <li>
                      <strong>Aspect Ratio:</strong> Square, 4:3, 16:9 options
                    </li>
                    <li>
                      <strong>RAW:</strong> Toggle ProRAW capture
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Photo Modes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              📸 Mastering Photo Modes
            </h2>

            <div className="space-y-8">
              {/* Standard Photo Mode */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  📷 Photo Mode
                </h3>
                <p className="text-gray-700 mb-4">
                  The default photo mode captures 24MP images from the 48MP
                  sensor, providing the perfect balance of file size and image
                  quality with computational photography enhancements.
                </p>

                <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    💡 Pro Tips for Photo Mode:
                  </h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Tap to focus on your subject for better exposure</li>
                    <li>
                      • Slide up/down after tapping to adjust exposure manually
                    </li>
                    <li>
                      • Use the 2x zoom for tighter shots without losing quality
                    </li>
                    <li>
                      • Enable Smart HDR for balanced exposures in challenging
                      lighting
                    </li>
                  </ul>
                </div>
              </div>

              {/* Portrait Mode */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  👤 Portrait Mode
                </h3>
                <p className="text-gray-700 mb-4">
                  Portrait mode creates professional-looking photos with blurred
                  backgrounds (bokeh effect) and multiple lighting options to
                  enhance your subjects.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Available Lighting Effects:
                    </h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>
                        • <strong>Natural Light:</strong> No additional lighting
                      </li>
                      <li>
                        • <strong>Studio Light:</strong> Brightens facial
                        features
                      </li>
                      <li>
                        • <strong>Contour Light:</strong> Dramatic shadows
                      </li>
                      <li>
                        • <strong>Stage Light:</strong> Subject on black
                        background
                      </li>
                      <li>
                        • <strong>Stage Light Mono:</strong> Black and white
                        version
                      </li>
                      <li>
                        • <strong>High-Key Light Mono:</strong> Black and white
                        on white
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      🎯 Portrait Mode Tips:
                    </h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Keep 2-8 feet from your subject</li>
                      <li>• Ensure good lighting on the subject's face</li>
                      <li>• Adjust depth effect after taking the photo</li>
                      <li>• Works with people, pets, and objects</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Night Mode */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  🌙 Night Mode
                </h3>
                <p className="text-gray-700 mb-4">
                  Night mode automatically activates in low-light conditions,
                  capturing multiple images and combining them for detailed,
                  well-exposed photos even in darkness.
                </p>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    ✨ Night Mode Best Practices:
                  </h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>
                      • Keep the phone as steady as possible during capture
                    </li>
                    <li>• Let auto-timer determine optimal exposure time</li>
                    <li>
                      • Use a tripod for longer exposures (up to 30 seconds)
                    </li>
                    <li>• Available on all cameras including front-facing</li>
                    <li>• Manual control by tapping the Night mode icon</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Video Features */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🎥 Video Recording Features
            </h2>

            <p className="text-gray-700 mb-6">
              The iPhone 15 Pro Max offers professional video recording
              capabilities with multiple formats, frame rates, and special modes
              for different creative needs.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  📹 Video Specifications
                </h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>
                    <strong>4K:</strong> 24, 25, 30, 60 fps
                  </li>
                  <li>
                    <strong>1080p HD:</strong> 25, 30, 60 fps
                  </li>
                  <li>
                    <strong>720p HD:</strong> 30 fps
                  </li>
                  <li>
                    <strong>ProRes:</strong> 4K 60fps (external storage)
                  </li>
                  <li>
                    <strong>Dolby Vision HDR:</strong> Up to 4K 60fps
                  </li>
                  <li>
                    <strong>Cinematic mode:</strong> 4K 30fps
                  </li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  🎬 Special Video Modes
                </h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>
                    <strong>Action Mode:</strong> Ultra-stable recording
                  </li>
                  <li>
                    <strong>Cinematic:</strong> Shallow depth of field
                  </li>
                  <li>
                    <strong>Time-lapse:</strong> Accelerated time capture
                  </li>
                  <li>
                    <strong>Slo-mo:</strong> 240fps at 1080p
                  </li>
                  <li>
                    <strong>QuickTake:</strong> Hold shutter for instant video
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Advanced Settings */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ⚙️ Advanced Camera Settings
            </h2>

            <p className="text-gray-700 mb-6">
              Access these professional settings by going to Settings &gt;
              Camera to fine-tune your photography experience.
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  📐 Formats and Quality
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Photo Formats:
                    </h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>
                        <strong>HEIF:</strong> High efficiency, smaller files
                      </li>
                      <li>
                        <strong>JPEG:</strong> Maximum compatibility
                      </li>
                      <li>
                        <strong>ProRAW:</strong> Professional editing
                        flexibility
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Video Formats:
                    </h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>
                        <strong>HEVC:</strong> High efficiency video codec
                      </li>
                      <li>
                        <strong>H.264:</strong> Maximum compatibility
                      </li>
                      <li>
                        <strong>ProRes:</strong> Professional video editing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  🔍 Additional Settings
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>
                        <strong>Grid:</strong> Rule of thirds composition guide
                      </li>
                      <li>
                        <strong>Mirror Front Camera:</strong> Flip selfie
                        orientation
                      </li>
                      <li>
                        <strong>View Outside Frame:</strong> See beyond the shot
                      </li>
                      <li>
                        <strong>Auto Macro:</strong> Automatic close-up
                        switching
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>
                        <strong>Prioritize Faster Shooting:</strong> Speed over
                        processing
                      </li>
                      <li>
                        <strong>Lens Correction:</strong> Fix ultra-wide
                        distortion
                      </li>
                      <li>
                        <strong>Auto FPS:</strong> Adaptive frame rate
                      </li>
                      <li>
                        <strong>Lock White Balance:</strong> Consistent color
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🏆 Professional Photography Tips
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    🌅 Golden Hour Photography
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Shoot during the first hour after sunrise or the last hour
                    before sunset for warm, soft lighting that makes everything
                    look better.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    📏 Composition Rules
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Use the grid to apply the rule of thirds. Place subjects
                    along the grid lines or at intersection points for more
                    dynamic compositions.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    🔍 Focus and Exposure
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Tap to focus on your main subject, then slide up or down to
                    adjust exposure. Lock focus and exposure by holding your
                    finger on the screen.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    🎨 Use Multiple Lenses
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Experiment with all focal lengths: 0.5x for wide scenes, 1x
                    for standard shots, 2x for portraits, and 3x for distant
                    subjects.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    🌟 Clean Your Lenses
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Keep all camera lenses clean with a microfiber cloth.
                    Smudges and dust can significantly impact image quality,
                    especially in bright light.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    📱 Use Both Hands
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Hold your phone with both hands for stability. Use volume
                    buttons as shutter release for more comfortable shooting,
                    especially in portrait orientation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🔧 Common Camera Issues & Solutions
            </h2>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  📱 Camera App Won't Open
                </h3>
                <div className="text-gray-700 text-sm space-y-1">
                  <p>
                    <strong>Solutions:</strong>
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Force close the Camera app and reopen</li>
                    <li>Restart your iPhone</li>
                    <li>Check available storage space</li>
                    <li>Update to latest iOS version</li>
                  </ul>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  🌫️ Blurry Photos
                </h3>
                <div className="text-gray-700 text-sm space-y-1">
                  <p>
                    <strong>Solutions:</strong>
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Clean camera lenses with microfiber cloth</li>
                    <li>Ensure proper focus by tapping the subject</li>
                    <li>Use both hands for stability</li>
                    <li>Check if lens correction is enabled</li>
                  </ul>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  ⚡ Camera Flash Not Working
                </h3>
                <div className="text-gray-700 text-sm space-y-1">
                  <p>
                    <strong>Solutions:</strong>
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Check flash settings (Auto/On/Off)</li>
                    <li>Remove any case blocking the flash</li>
                    <li>Restart the Camera app</li>
                    <li>Check for iOS updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                🎉 You're Ready to Capture Amazing Photos!
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The iPhone 15 Pro Max camera system is incredibly powerful, and
                with these tips and techniques, you'll be able to capture
                professional-quality photos and videos. Remember, the best
                camera is the one you have with you, so don't forget to practice
                and experiment with different modes and settings.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/blog/apple"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
                >
                  More Apple Guides
                </Link>
                <Link
                  href="/phone-problems"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  Phone Troubleshooting
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* Related Articles */}
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            📚 Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/blog/apple/iphone-15-pro-max-setup-guide"
              className="group bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">
                iPhone 15 Pro Max Complete Setup Guide
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Everything you need to know to set up your new iPhone 15 Pro Max
                perfectly.
              </p>
              <span className="text-primary-600 text-sm font-medium">
                Read guide →
              </span>
            </Link>

            <Link
              href="/blog/apple/ios-17-hidden-features"
              className="group bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">
                iOS 17 Hidden Features You Should Know
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Discover lesser-known iOS 17 features that will enhance your
                iPhone experience.
              </p>
              <span className="text-primary-600 text-sm font-medium">
                Read guide →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
