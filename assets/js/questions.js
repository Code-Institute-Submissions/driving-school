/*jshint -W033 */

let questionData = [{
        id: 0,
        question: "What is the effect of an incorrectly adjusted driver's seat?",
        answers: [{
                text: " It can delay the driver from operating a control",
                correct: true,
                answered: false
            },
            {
                text: "It improves the driver's ability to operate the clutch",
                correct: false,
                answered: false
            },
            {
                text: "It enables the driver to relax more on a long journey",
                correct: false,
                answered: false
            },
            {
                text: "It gives the driver a better view in the rear-view mirror",
                correct: false,
                answered: false
            }
        ]
    },
    {
        id: 1,
        question: "What type of noise might fast cornering create?",
        answers: [{
                text: "Brake squeal",
                correct: false,
                answered: false
            },
            {
                text: "Tyre squeal",
                correct: true,
                answered: false
            },
            {
                text: "Exhaust backfire",
                correct: false,
                answered: false
            },
            {
                text: "Engine backfire",
                correct: false,
                answered: false
            }
        ]
    },
    {
        id: 2,
        question: "If the brake pedal of a vehicle feels soft or spongy when applied, what does this mean?",
        answers: [{
                text: "Worn brake pads",
                correct: false,
                answered: false
            },
            {
                text: "A fault in the hand-brake cable",
                correct: false,
                answered: false
            },
            {
                text: "The parking brake is on",
                correct: false,
                answered: false
            },
            {
                text: " A fault in the brake fluid system",
                correct: true,
                answered: false
            }
        ]
    },
    {
        id: 3,
        question: "What is the recommended method of driving a car with automatic transmission?",
        answers: [{
                text: "Operate the accelerator and brake with the right foot",
                correct: true,
                answered: false
            },
            {
                text: "Operate the accelerator with the right foot and the brake with the left foot",
                correct: false,
                answered: false
            },
            {
                text: "Operate the accelerator and brake with the left foot",
                correct: false,
                answered: false
            },
            {
                text: "Use the handbrake to bring the vehicle to a halt",
                correct: false,
                answered: false
            }
        ]
    },
    {
        id: 4,
        question: "Which vehicle is exempt from speed limits when being used in an emergency?",
        answers: [{
                text: "Mountain rescue",
                correct: false,
                answered: false
            },
            {
                text: "Doctor on call",
                correct: false,
                answered: false
            },
            {
                text: "Fire brigade",
                correct: true,
                answered: false
            },
            {
                text: "Breakdown recovery",
                correct: false,
                answered: false
            }
        ]
    },
    {
        id: 5,
        question: "What is the maximum gross weight of a vehicle that may be driven by the holder of a Category B driving licence?",
        answers: [{
                text: "3,250 kilograms",
                correct: false,
                answered: false
            },
            {
                text: "3,500 kilograms",
                correct: true,
                answered: false
            },
            {
                text: "3,000 kilograms",
                correct: false,
                answered: false
            },
            {
                text: "3,450 kilograms",
                correct: false,
                answered: false
            }
        ]
    },
    {
        id: 6,
        question: "What is the minimum legal tread depth for tyres on cars?",
        answers: [{
                text: " 2.6 millimetres",
                correct: false,
                answered: false
            },
            {
                text: "1 millimetre",
                correct: false,
                answered: false
            },
            {
                text: "1.6 millimetres",
                correct: true,
                answered: false
            },
            {
                text: "0.6 millimetres",
                correct: false,
                answered: false
            }
        ]
    },
    {
        id: 7,
        question: "What does the load index of a tyre indicate?",
        answers: [{
                text: "The maximum load of the vehicle",
                correct: false,
                answered: false
            },
            {
                text: " The maximum air pressure of the tyre.",
                correct: false,
                answered: false
            },
            {
                text: "The maximum load per axle.",
                correct: false,
                answered: false
            },
            {
                text: "The maximum load a tyre can carry.",
                correct: true,
                answered: false
            }
        ]
    },
    {
        id: 8,
        question: "What should a driver do when involved in an incident where nobody is injured but the vehicles are causing a danger or obstruction on the road?",
        answers: [{
                text: "Move all passengers and put a red warning triangle on the road.",
                correct: false,
                answered: false
            },
            {
                text: "Take care when moving damaged vehicles and make every effort to warn other traffic.",
                correct: true,
                answered: false
            },
            {
                text: "Halt all traffic until it has been established who is at fault.",
                correct: false,
                answered: false
            },
            {
                text: "Wait for the Gardaí to arrive before moving the vehicles.",
                correct: false,
                answered: false
            }
        ]
    },
    {
        id: 9,
        question: "What should a driver do if involved in an incident where there is damage to property only?",
        answers: [{
                text: "It is only necessary to report the incident to the Gardaí within 10 days.",
                correct: false,
                answered: false
            },
            {
                text: "There is no need to report the incident if there is no damage to the vehicle.",
                correct: false,
                answered: false
            },
            {
                text: "Report the incident both to the property owner and the Gardaí within 48 hours",
                correct: true,
                answered: false
            },
            {
                text: "Run away.",
                correct: false,
                answered: false
            }
        ]
    },
    {
        id: 10,
        question: "What should a driver do where a person has been injured in a collision?",
        answers: [{
                text: "Move the victim to the side of the road.",
                correct: false,
                answered: false
            },
            {
                text: "Move the vehicles out of the way to avoid causing obstruction.",
                correct: false,
                answered: false
            },
            {
                text: "Always move the victim and the vehicles.",
                correct: false,
                answered: false
            },
            {
                text: "Move the victim only if there is a risk of fire or further injury.",
                correct: true,
                answered: false
            },
        ]
    },
    {
        id: 11,
        question: "What should a driver do to assist a person who is unconscious following a collision?",
        answers: [{
                text: "Raise the person's head and hold it in that position.",
                correct: false,
                answered: false
            },
            {
                text: "Try to keep the person warm with a blanket or overcoat.",
                correct: true,
                answered: false
            },
            {
                text: "Try and get the person to drink something warm.",
                correct: false,
                answered: false
            },
            {
                text: "Move the person to the nearest hospital immediately.",
                correct: false,
                answered: false
            }
        ]
    },
    {
        id: 12,
        question: "What effect can overloading a vehicle have on its road-holding?",
        answers: [{
                text: "Provided the load is evenly distributed, it improves the stability of the vehicle.",
                correct: false,
                answered: false
            },
            {
                text: "The load can make the vehicle more difficult to control.",
                correct: true,
                answered: false
            },
            {
                text: "The load can make the vehicle more difficult to control, but only when reversing.",
                correct: false,
                answered: false
            },
            {
                text: "The load can make the vehicle more difficult to control, but only when going downhill.",
                correct: false,
                answered: false
            }
        ]
    },
    {
        id: 13,
        question: "When should tyre pressure be checked?",
        answers: [{
                text: "At service intervals only.",
                correct: false,
                answered: false
            },
            {
                text: "When the tyres are cold.",
                correct: true,
                answered: false
            },
            {
                text: " When the tyres are hot.",
                correct: false,
                answered: false
            },
            {
                text: "When the tyres are part-worn.",
                correct: false,
                answered: false
            }
        ]
    },
    {
        id: 14,
        question: "What does worn tread along the edge of the inside of a tyre suggest?",
        answers: [{
                text: "Steering alignment may be faulty.",
                correct: true,
                answered: false
            },
            {
                text: "Air pressure is low.",
                correct: false,
                answered: false
            },
            {
                text: "The vehicle has been driven too fast around corners.",
                correct: false,
                answered: false
            },
            {
                text: " Air pressure is high.",
                correct: false,
                answered: false
            }
        ]
    },
    {
        id: 15,
        question: "Under what circumstances would a driver increase the air pressure in the tyres?",
        answers: [{
                text: "When taking a journey with additional passengers.",
                correct: true,
                answered: false
            },
            {
                text: "When the journey exceeds 200 km.",
                correct: false,
                answered: false
            },
            {
                text: "When higher speeds are anticipated on motorway driving.",
                correct: false,
                answered: false
            },
            {
                text: "When the tread depth on the tyres is below 2 mm.",
                correct: false,
                answered: false
            }
        ]
    },
    {
        id: 16,
        question: "What should the driver do to secure the vehicle when changing a front nearside (left-hand side) wheel?",
        answers: [{
                text: "Point the front wheels towards the kerb.",
                correct: false,
                answered: false
            },
            {
                text: "Point the front wheels away from the kerb.",
                correct: false,
                answered: false
            },
            {
                text: "Ensure that the vehicle cannot roll when jacked up.",
                correct: true,
                answered: false
            },
            {
                text: "Ensure the gear lever is in neutral.",
                correct: false,
                answered: false
            }
        ]
    },
    {
        id: 17,
        question: "What is the most common cause of heavy steering?",
        answers: [{
                text: "Poorly oiled steering.",
                correct: false,
                answered: false
            },
            {
                text: "Under-inflated tyres.",
                correct: true,
                answered: false
            },
            {
                text: "Badly worn brakes.",
                correct: false,
                answered: false
            },
            {
                text: "Over-inflated tyres.",
                correct: false,
                answered: false
            }
        ]
    },
    {
        id: 18,
        question: "What should a driver do if the fuel system becomes air-locked?",
        answers: [{
                text: "Bleed the air out of the fuel system.",
                correct: true,
                answered: false
            },
            {
                text: " Loosen the fuel pump.",
                correct: false,
                answered: false
            },
            {
                text: "Tighten the injector pipes.",
                correct: false,
                answered: false
            },
            {
                text: "Drain the fuel filter.",
                correct: false,
                answered: false
            }
        ]
    },
    {
        id: 19,
        question: "What is the recommended minimum stopping distance for a car travelling at 50 km/h on a dry road?",
        answers: [{
                text: "55 metres.",
                correct: false,
                answered: false
            },
            {
                text: "25 metres.",
                correct: true,
                answered: false
            },
            {
                text: "15 metres.",
                correct: false,
                answered: false
            },
            {
                text: "5 metres.",
                correct: false,
                answered: false
            }
        ]
    },
    {
        id: 20,
        question: "What is the recommended minimum stopping distance for a car travelling at 50 km/h on a wet road?",
        answers: [{
                text: "56 metres.",
                correct: false,
                answered: false
            },
            {
                text: "16 metres.",
                correct: false,
                answered: false
            },
            {
                text: "76 metres.",
                correct: false,
                answered: false
            },
            {
                text: "36 metres.",
                correct: true,
                answered: false
            }
        ]
    },
    {
        id: 21,
        question: "What is the recommended minimum stopping distance for a car travelling at 50 km/h on a wet road?",
        answers: [{
                text: "70 metres.",
                correct: true,
                answered: false
            },
            {
                text: "120 metres.",
                correct: false,
                answered: false
            },
            {
                text: "90 metres.",
                correct: false,
                answered: false
            },
            {
                text: "30 metres.",
                correct: false,
                answered: false
            }
        ]
    },
    {
        id: 22,
        question: "In dry weather how might a driver judge what is a safe following distance to vehicle in front?",
        answers: [{
                text: "By allowing at least two vehicle lengths between the vehicles.",
                correct: false,
                answered: false
            },
            {
                text: "By using a fixed point and applying the two second rule.",
                correct: true,
                answered: false
            },
            {
                text: "Drive at the same speed as the vehicle in front.",
                correct: false,
                answered: false
            },
            {
                text: "Allow a least two vehicle lengths for each kilometre per hour.",
                correct: false,
                answered: false
            }
        ]
    },
    {
        id: 23,
        question: "When driving at night the full headlights of a typical car should enable the driver to see for a distance of how many metres?",
        answers: [{
                text: "150 metres.",
                correct: false,
                answered: false
            },
            {
                text: "50 metres.",
                correct: false,
                answered: false
            },
            {
                text: "200 metres.",
                correct: false,
                answered: false
            },
            {
                text: "100 metres.",
                correct: true,
                answered: false
            }
        ]
    },
    {
        id: 24,
        question: "When driving at night the dipped headlights of a typical car should enable the driver to see for a distance of how many metres?",
        answers: [{
                text: "20 metres.",
                correct: false,
                answered: false
            },
            {
                text: "40 metres.",
                correct: false,
                answered: false
            },
            {
                text: "50 metres.",
                correct: false,
                answered: false
            },
            {
                text: "30 metres.",
                correct: true,
                answered: false
            }
        ]
    },
]