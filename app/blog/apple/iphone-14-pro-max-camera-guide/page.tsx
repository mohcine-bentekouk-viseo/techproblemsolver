import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'iPhone 14 Pro Max Camera Guide: Master Photography & Video | Apple Blog',
  description: 'Complete iPhone 14 Pro Max camera guide. Learn to use the 48MP main camera, ProRAW, Cinematic mode, and advanced features for professional results.',
  keywords: 'iPhone 14 Pro Max camera, 48MP camera, ProRAW, Cinematic mode, iPhone photography, iPhone video, camera settings, photography tips',
}

export default function iPhone14ProMaxCameraGuide() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/blog" className="text-gray-500 hover:text-primary-600">
                Blog
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/blog/apple" className="text-gray-500 hover:text-primary-600">
                Apple
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-primary-600 font-medium">iPhone 14 Pro Max Camera Guide</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">📸</span>
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                iPhone 14 Pro Max Camera Guide
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Master the revolutionary 48MP camera system
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-500 border-b border-gray-200 pb-6">
            <span>📅 Published: September 6, 2025</span>
            <span>⏱️ 20 min read</span>
            <span>📱 iPhone 14 Pro Max</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
              COMPLETE GUIDE
            </span>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            The iPhone 14 Pro Max revolutionized mobile photography with its groundbreaking 48MP main camera system. 
            This comprehensive guide will transform you from a casual photographer into someone who truly understands 
            and maximizes every feature of this incredible camera system.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Master</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>48MP ProRAW photography</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Advanced Cinematic mode</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Professional video recording</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Night mode techniques</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Portrait mode mastery</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Macro photography tips</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Hidden camera features</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Troubleshooting common issues</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Camera System Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">iPhone 14 Pro Max Camera System</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-4">📸</div>
              <h3 className="font-bold text-gray-900 mb-2">48MP Main Camera</h3>
              <p className="text-gray-600 text-sm">
                Revolutionary 48MP sensor with 2x Telephoto capability and ProRAW support for professional results.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="font-bold text-gray-900 mb-2">3x Telephoto</h3>
              <p className="text-gray-600 text-sm">
                77mm equivalent telephoto lens with 3x optical zoom and enhanced stabilization for sharp portraits.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-4">🌅</div>
              <h3 className="font-bold text-gray-900 mb-2">Ultra Wide</h3>
              <p className="text-gray-600 text-sm">
                13mm ultra-wide lens with macro capability for creative perspectives and close-up details.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3">Key Camera Specifications</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Main Camera:</strong> 48MP, f/1.78, 24mm equivalent<br/>
                <strong>Telephoto:</strong> 12MP, f/2.8, 77mm equivalent<br/>
                <strong>Ultra Wide:</strong> 12MP, f/2.2, 13mm equivalent
              </div>
              <div>
                <strong>Video:</strong> 4K up to 60fps, Cinematic mode<br/>
                <strong>Features:</strong> ProRAW, ProRes, Action mode<br/>
                <strong>Stabilization:</strong> Sensor-shift OIS on all lenses
              </div>
            </div>
          </div>
        </section>

        {/* Camera Interface Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Mastering the Camera Interface</h2>
          
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8 text-white mb-8">
            <h3 className="text-2xl font-bold mb-4">Pro Tip: Camera Access</h3>
            <p className="text-gray-300 mb-4">
              For instant camera access, swipe left from the lock screen or use Control Center. 
              For maximum speed, enable "Lock to End Recording" in camera settings.
            </p>
            <div className="bg-white bg-opacity-10 rounded p-4">
              <strong className="text-yellow-300">Quick Access Methods:</strong><br/>
              • Lock screen swipe (fastest)<br/>
              • Control Center camera icon<br/>
              • Press and hold camera icon on lock screen<br/>
              • "Hey Siri, take a photo"
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Camera Modes Explained</h3>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">PHOTO</span>
                Standard Photo Mode
              </h4>
              <p className="text-gray-600 mb-4">
                Your go-to mode for everyday photography. The 48MP sensor automatically adapts between 
                12MP and 48MP based on lighting conditions for optimal results.
              </p>
              <div className="bg-blue-50 rounded p-4">
                <strong>Best for:</strong> General photography, social media, quick shots<br/>
                <strong>Key feature:</strong> Automatic HDR and computational photography
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">PORTRAIT</span>
                Portrait Mode
              </h4>
              <p className="text-gray-600 mb-4">
                Creates professional-looking portraits with beautiful background blur (bokeh). 
                The iPhone 14 Pro Max offers multiple portrait lighting effects and depth control.
              </p>
              <div className="bg-purple-50 rounded p-4">
                <strong>Best for:</strong> People, pets, objects with depth separation<br/>
                <strong>Key feature:</strong> Adjustable depth of field after taking the photo
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">NIGHT</span>
                Night Mode
              </h4>
              <p className="text-gray-600 mb-4">
                Automatically activates in low light conditions. Uses advanced computational photography 
                to capture bright, detailed photos even in near-darkness.
              </p>
              <div className="bg-green-50 rounded p-4">
                <strong>Best for:</strong> Low light, nighttime scenes, indoor photography<br/>
                <strong>Key feature:</strong> Automatic exposure time adjustment (1-30 seconds)
              </div>
            </div>
          </div>
        </section>

        {/* 48MP ProRAW Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">48MP ProRAW: Professional Photography</h2>
          
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What is ProRAW?</h3>
            <p className="text-gray-700 mb-4">
              ProRAW combines the flexibility of RAW format with Apple's computational photography. 
              You get unprocessed sensor data with the benefits of Smart HDR, Deep Fusion, and Night mode.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">✅ Advantages</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Maximum image quality and detail</li>
                  <li>• Full editing control in post</li>
                  <li>• Better highlight/shadow recovery</li>
                  <li>• Professional workflow compatibility</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">⚠️ Considerations</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Larger file sizes (25-65MB each)</li>
                  <li>• Requires editing apps like Lightroom</li>
                  <li>• Slower burst mode</li>
                  <li>• More storage space needed</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">How to Enable ProRAW</h3>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">1</span>
                <div>
                  <strong>Enable in Settings:</strong><br/>
                  Settings → Camera → Formats → Apple ProRAW (toggle on)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">2</span>
                <div>
                  <strong>Access in Camera:</strong><br/>
                  Open Camera app → Tap RAW button in top right corner
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">3</span>
                <div>
                  <strong>Take Photos:</strong><br/>
                  When RAW is active, you'll see a yellow RAW indicator
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">💡 ProRAW Best Practices</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>When to Use ProRAW:</strong>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>• Challenging lighting conditions</li>
                  <li>• Landscape photography</li>
                  <li>• Professional projects</li>
                  <li>• When you plan to edit extensively</li>
                </ul>
              </div>
              <div>
                <strong>Recommended Editing Apps:</strong>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>• Adobe Lightroom (best overall)</li>
                  <li>• Apple Photos (basic adjustments)</li>
                  <li>• VSCO (filters and presets)</li>
                  <li>• RNI Films (vintage effects)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cinematic Mode Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cinematic Mode: Professional Video</h2>
          
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white mb-8">
            <h3 className="text-2xl font-bold mb-4">What Makes Cinematic Mode Special?</h3>
            <p className="text-purple-100 mb-4">
              Cinematic mode brings Hollywood-style focus transitions to your iPhone. It automatically 
              shifts focus between subjects and allows you to change the depth of field after recording.
            </p>
            <div className="bg-white bg-opacity-20 rounded p-4">
              <strong>Key Features:</strong><br/>
              • Automatic focus transitions • Depth of field control<br/>
              • 1080p at 30fps recording • Post-recording editing
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Using Cinematic Mode</h3>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">🎬 Basic Operation</h4>
              <div className="space-y-3 text-sm">
                <p><strong>1. Switch to Cinematic:</strong> Swipe to "Cinematic" mode in camera app</p>
                <p><strong>2. Frame Your Shot:</strong> Position your subject(s) in frame</p>
                <p><strong>3. Start Recording:</strong> Tap the record button to begin</p>
                <p><strong>4. Focus Control:</strong> Tap different subjects to shift focus manually</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">✏️ Post-Recording Editing</h4>
              <div className="bg-yellow-50 rounded p-4 mb-4">
                <strong>Edit in Photos App:</strong><br/>
                Open your cinematic video → Tap "Edit" → Use the focus controls at the bottom
              </div>
              <div className="space-y-2 text-sm">
                <p>• <strong>Change Focus:</strong> Tap on different areas of the frame</p>
                <p>• <strong>Adjust Depth:</strong> Use the f-stop slider (f/1.4 to f/16)</p>
                <p>• <strong>Remove Effect:</strong> Toggle cinematic mode on/off</p>
                <p>• <strong>Timing Control:</strong> Adjust when focus changes occur</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">🎯 Pro Tips for Cinematic Mode</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Best Subjects:</strong>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>• People talking or moving</li>
                  <li>• Pets playing</li>
                  <li>• Objects at different distances</li>
                  <li>• Scenes with clear foreground/background</li>
                </ul>
              </div>
              <div>
                <strong>Shooting Tips:</strong>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>• Keep movements smooth</li>
                  <li>• Ensure good lighting</li>
                  <li>• Practice focus transitions</li>
                  <li>• Use a tripod for stability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Video Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Video Features</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🎬</span>
                ProRes Recording
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Professional video codec used in Hollywood productions. Requires significant storage 
                but provides maximum quality for professional editing.
              </p>
              <div className="bg-blue-50 rounded p-3 text-sm">
                <strong>File Sizes (1 minute):</strong><br/>
                4K ProRes: ~6GB | 1080p ProRes: ~1.7GB
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Action Mode
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Extreme stabilization for action shots. Crops the image slightly but provides 
                gimbal-like stability for running, biking, or handheld shooting.
              </p>
              <div className="bg-orange-50 rounded p-3 text-sm">
                <strong>Best for:</strong> Sports, travel, walking videos
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Video Recording Settings</h3>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Recommended Settings by Use Case</h4>
            
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <div>
                  <strong>Social Media (Instagram, TikTok)</strong><br/>
                  <span className="text-gray-600">1080p at 30fps, Standard format</span>
                </div>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">RECOMMENDED</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <div>
                  <strong>Professional Projects</strong><br/>
                  <span className="text-gray-600">4K at 24fps, ProRes (if storage allows)</span>
                </div>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">PRO</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <div>
                  <strong>Family Memories</strong><br/>
                  <span className="text-gray-600">4K at 30fps, HEVC format</span>
                </div>
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">BALANCED</span>
              </div>
              
              <div className="flex justify-between items-center py-2">
                <div>
                  <strong>Action/Sports</strong><br/>
                  <span className="text-gray-600">1080p at 60fps, Action mode ON</span>
                </div>
                <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">ACTION</span>
              </div>
            </div>
          </div>
        </section>

        {/* Photography Techniques */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Photography Techniques</h2>
          
          <div className="space-y-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🌙</span>
                Night Photography Mastery
              </h3>
              
              <p className="text-gray-600 mb-4">
                The iPhone 14 Pro Max excels in low light conditions. Here's how to maximize its potential:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Setup Tips</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Use a tripod for exposures over 3 seconds</li>
                    <li>• Clean your lens thoroughly</li>
                    <li>• Turn off flash for natural results</li>
                    <li>• Enable Night mode manually in medium light</li>
                    <li>• Use self-timer to avoid camera shake</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Creative Techniques</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Light trails: 10-30 second exposures</li>
                    <li>• Star photography: Use telephoto lens</li>
                    <li>• City lights: Include foreground elements</li>
                    <li>• Moon shots: 3x telephoto + manual timing</li>
                    <li>• Light painting: Move light sources during exposure</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-indigo-50 rounded p-4 mt-4">
                <strong>Pro Tip:</strong> For the sharpest night photos, manually adjust the Night mode timer. 
                Longer isn't always better – find the sweet spot for your scene.
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🔍</span>
                Macro Photography Magic
              </h3>
              
              <p className="text-gray-600 mb-4">
                The ultra-wide camera doubles as a macro lens, allowing you to get incredibly close to your subjects:
              </p>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Getting Started</h4>
                  <p className="text-sm text-gray-600">
                    When you get close to a subject (2-3 inches), the camera automatically switches to macro mode. 
                    You'll see a small flower icon indicating the switch has occurred.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>Great Subjects:</strong>
                    <ul className="mt-2 text-gray-600 space-y-1">
                      <li>• Flowers and plants</li>
                      <li>• Insects and small creatures</li>
                      <li>• Food details</li>
                      <li>• Textures and patterns</li>
                      <li>• Jewelry and small objects</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Lighting Tips:</strong>
                    <ul className="mt-2 text-gray-600 space-y-1">
                      <li>• Use natural diffused light</li>
                      <li>• Avoid harsh direct sunlight</li>
                      <li>• Try LED ring lights</li>
                      <li>• Shoot during golden hour</li>
                      <li>• Use reflectors for fill light</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Composition:</strong>
                    <ul className="mt-2 text-gray-600 space-y-1">
                      <li>• Fill the frame completely</li>
                      <li>• Look for interesting patterns</li>
                      <li>• Use shallow depth of field</li>
                      <li>• Try different angles</li>
                      <li>• Include size references</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">👥</span>
                Portrait Photography Excellence
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Portrait Lighting Effects</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Natural Light</span>
                      <span className="text-gray-500">Soft, even lighting</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Studio Light</span>
                      <span className="text-gray-500">Bright, clean look</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Contour Light</span>
                      <span className="text-gray-500">Dramatic shadows</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Stage Light</span>
                      <span className="text-gray-500">Spotlight effect</span>
                    </div>
                    <div className="flex justify-between">
                      <span>High‑Key Light Mono</span>
                      <span className="text-gray-500">B&W with bright background</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Portrait Tips</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Use 3x telephoto for flattering compression</li>
                    <li>• Focus on the eyes always</li>
                    <li>• Try different f-stop values (f/1.4 to f/4)</li>
                    <li>• Use window light for natural portraits</li>
                    <li>• Experiment with angles and distances</li>
                    <li>• Take multiple shots with different expressions</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-pink-50 rounded p-4">
                <strong>Advanced Tip:</strong> After taking a portrait, you can adjust the depth of field in the Photos app. 
                Swipe up on the photo and use the f-stop slider to fine-tune the background blur.
              </div>
            </div>
          </div>
        </section>

        {/* Hidden Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Hidden Camera Features</h2>
          
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🔍 Secret Camera Tricks</h3>
            <p className="text-gray-700 mb-6">
              Unlock the full potential of your iPhone 14 Pro Max camera with these lesser-known features 
              that even experienced users might not know about.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">📸 Quick Capture Tricks</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li><strong>Burst Mode:</strong> Hold shutter button and slide left</li>
                  <li><strong>Quick Video:</strong> Hold shutter button and slide right</li>
                  <li><strong>Lock Focus/Exposure:</strong> Press and hold on subject</li>
                  <li><strong>Level Tool:</strong> Settings → Camera → Grid → Enable</li>
                  <li><strong>Timer + Burst:</strong> Set timer, then hold shutter</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">⚙️ Advanced Settings</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li><strong>Preserve Settings:</strong> Keep your preferred camera mode</li>
                  <li><strong>Smart HDR:</strong> Better highlight/shadow balance</li>
                  <li><strong>Lens Correction:</strong> Fix ultra-wide distortion</li>
                  <li><strong>View Outside Frame:</strong> See what other lenses capture</li>
                  <li><strong>Mirror Front Camera:</strong> Selfies match preview</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">🎬 Video Secrets</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li><strong>QuickTake Pause:</strong> Pause video recording mid-take</li>
                  <li><strong>Zoom During Video:</strong> Smooth digital zoom up to 9x</li>
                  <li><strong>Lock White Balance:</strong> Long press for consistent color</li>
                  <li><strong>Audio Zoom:</strong> Directional audio follows zoom</li>
                  <li><strong>Stereo Recording:</strong> Landscape orientation for best audio</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">📱 Accessibility Features</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li><strong>VoiceOver:</strong> Audio descriptions of camera functions</li>
                  <li><strong>Voice Control:</strong> "Take photo" or "Start recording"</li>
                  <li><strong>AssistiveTouch:</strong> Custom camera gestures</li>
                  <li><strong>Switch Control:</strong> External switch camera operation</li>
                  <li><strong>Magnifier:</strong> Use camera as magnifying glass</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">💾 Storage & Organization</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li><strong>HEIF Format:</strong> Smaller file sizes, same quality</li>
                  <li><strong>iCloud Photos:</strong> Automatic backup and sync</li>
                  <li><strong>Albums:</strong> Auto-create based on location/people</li>
                  <li><strong>Shared Albums:</strong> Collaborate with family/friends</li>
                  <li><strong>Optimize Storage:</strong> Save space with cloud originals</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">🏆 Pro Power User Tip</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Create a custom Control Center with camera shortcuts:
                </p>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Settings → Control Center</li>
                  <li>2. Add "Camera" and "Screen Recording"</li>
                  <li>3. Arrange for quick access</li>
                  <li>4. Now you have instant camera access from anywhere</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Troubleshooting Common Issues</h2>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-red-600">⚠️</span>
                Camera Problems & Solutions
              </h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Blurry Photos</h4>
                  <p className="text-sm text-gray-600 mb-2">Photos consistently coming out soft or unfocused?</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Clean your lens with a microfiber cloth</li>
                    <li>• Tap to focus on your main subject</li>
                    <li>• Use both hands to steady the phone</li>
                    <li>• Try tapping the shutter instead of holding</li>
                    <li>• Check if Night mode needs more time</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">App Crashes or Freezes</h4>
                  <p className="text-sm text-gray-600 mb-2">Camera app stopping unexpectedly?</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Force close Camera app and reopen</li>
                    <li>• Restart your iPhone completely</li>
                    <li>• Check available storage space</li>
                    <li>• Update to latest iOS version</li>
                    <li>• Reset camera settings if problem persists</li>
                  </ul>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Storage Issues</h4>
                  <p className="text-sm text-gray-600 mb-2">Running out of space or photos not saving?</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Enable iCloud Photos for automatic backup</li>
                    <li>• Use "Optimize iPhone Storage" setting</li>
                    <li>• Switch from ProRAW to HEIF for smaller files</li>
                    <li>• Regularly delete unnecessary photos/videos</li>
                    <li>• Consider external storage solutions</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Poor Low Light Performance</h4>
                  <p className="text-sm text-gray-600 mb-2">Night photos not turning out well?</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ensure Night mode is enabled (auto or manual)</li>
                    <li>• Hold very still during longer exposures</li>
                    <li>• Use a tripod for exposures over 3 seconds</li>
                    <li>• Try different camera lenses (main vs telephoto)</li>
                    <li>• Look for additional light sources if possible</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">🔧 When to Contact Apple Support</h3>
              <p className="text-gray-600 mb-4">
                If you experience these issues, your iPhone may need professional service:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Hardware Issues:</strong>
                  <ul className="mt-2 text-gray-600 space-y-1">
                    <li>• Camera lens is cracked or damaged</li>
                    <li>• Black screen when opening camera</li>
                    <li>• Camera makes unusual noises</li>
                    <li>• Flash not working at all</li>
                  </ul>
                </div>
                <div>
                  <strong>Software Issues:</strong>
                  <ul className="mt-2 text-gray-600 space-y-1">
                    <li>• Camera features missing after update</li>
                    <li>• Persistent app crashes after troubleshooting</li>
                    <li>• Settings not saving or resetting</li>
                    <li>• Connectivity issues with other apps</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">You're Now a Camera Pro! 🎉</h2>
            <p className="text-green-100 mb-6 text-lg">
              You've learned everything from basic controls to professional techniques. Your iPhone 14 Pro Max 
              camera is capable of incredible results – now you have the knowledge to unlock its full potential.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white bg-opacity-20 rounded p-4">
                <div className="text-2xl mb-2">📸</div>
                <strong>Master the Basics</strong>
                <p className="text-sm text-green-100 mt-1">Interface, modes, and settings</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded p-4">
                <div className="text-2xl mb-2">🎬</div>
                <strong>Professional Video</strong>
                <p className="text-sm text-green-100 mt-1">Cinematic mode and ProRes</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded p-4">
                <div className="text-2xl mb-2">✨</div>
                <strong>Advanced Techniques</strong>
                <p className="text-sm text-green-100 mt-1">ProRAW, hidden features, and more</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog/apple"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-100 transition-colors"
              >
                More Apple Guides
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                Get Expert Help
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Apple Guides</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/blog/apple/iphone-15-pro-max-camera-guide"
              className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-primary-300 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📱</span>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-primary-600">
                    iPhone 15 Pro Max Camera
                  </h3>
                  <span className="text-sm text-gray-500">Latest model</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Compare with the newest iPhone 15 Pro Max camera system and features.
              </p>
            </Link>

            <Link
              href="/phone-problems"
              className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-primary-300 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🔧</span>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-primary-600">
                    Phone Troubleshooting
                  </h3>
                  <span className="text-sm text-gray-500">Fix common issues</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Solve common iPhone problems with our comprehensive troubleshooting guides.
              </p>
            </Link>

            <Link
              href="/contact"
              className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-primary-300 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">💬</span>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-primary-600">
                    Expert Support
                  </h3>
                  <span className="text-sm text-gray-500">Get personalized help</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Need specific help with your iPhone? Contact our team of mobile experts.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
