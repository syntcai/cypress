exports['e2e requests / passes'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      1 found (request_spec.js)                                                          │
  │ Searched:   cypress/integration/request_spec.js                                                │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  request_spec.js                                                                 (1 of 1)


  redirects + requests
    ✓ gets and sets cookies from cy.request
    ✓ visits to a different superdomain will be resolved twice
    ✓ automatically follows redirects
    ✓ can turn off following redirects that set a cookie
    ✓ can turn off automatically following redirects
    ✓ follows all redirects even when they change methods
    ✓ can submit json body
    ✓ can submit form url encoded body
    ✓ can send qs query params
    ✓ passes even on non 2xx or 3xx status code
    ✓ sets Accept header to */* by default
    ✓ can override the accept header
    ✓ does not duplicate request cookies on 302 redirect
    ✓ can make requests that take more than \`responseTimeout\` to complete


  14 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        14                                                                               │
  │ Passing:      14                                                                               │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     request_spec.js                                                                  │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /XXX/XXX/XXX/cypress/videos/request_spec.js.mp4                 (X second)


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  request_spec.js                          XX:XX       14       14        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        XX:XX       14       14        -        -        -  


`
