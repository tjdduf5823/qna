const qnaList = [
  {
    q: '1. 나는 키가 큰 사람이 좋다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 그렇지 않다.', type: [1] },
      { answer: 'c. 그렇다.', type: [2] },
      { answer: 'd. 매우 그렇다.', type: [3]}
    ]
  },
  {
    q: '2. 나는 마른 사람이 좋다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 그렇지 않다.', type: [1] },
      { answer: 'c. 그렇다.', type: [2] },
      { answer: 'd. 매우 그렇다.', type: [3]}
    ]
  },
  {
    q: '3. 나는 똑똑한 사람이 좋다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 그렇지 않다.', type: [1] },
      { answer: 'c. 그렇다.', type: [2] },
      { answer: 'd. 매우 그렇다.', type: [3]}
    ]
  },
  {
    q: '4. 나는 나만 바라보는 사람이 좋다.',
    a: [
    { answer: 'a. 전혀 그렇지 않다.', type: [0] },
    { answer: 'b. 그렇지 않다.', type: [1] },
    { answer: 'c. 그렇다.', type: [2] },
    { answer: 'd. 매우 그렇다.', type: [3]}
    ]
  },
  {
    q: '5. 나는 집착하는 사람이 좋다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 그렇지 않다.', type: [1] },
      { answer: 'c. 그렇다.', type: [2] },
      { answer: 'd. 매우 그렇다.', type: [3]}
    ]
  },
  {
    q: '6. 나는 잘생긴/예쁜 사람이 좋다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 그렇지 않다.', type: [1] },
      { answer: 'c. 그렇다.', type: [2] },
      { answer: 'd. 매우 그렇다.', type: [3]}
    ]
  },
  {
    q: '7. 나는 친구가 없는 사람이 좋다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 그렇지 않다.', type: [1] },
      { answer: 'c. 그렇다.', type: [2] },
      { answer: 'd. 매우 그렇다.', type: [3]}
    ]
  },
  {
    q: '8. 나는 말 많은 사람이 좋다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 그렇지 않다.', type: [1] },
      { answer: 'c. 그렇다.', type: [2] },
      { answer: 'd. 매우 그렇다.', type: [3]}
    ]
  },
  {
    q: '9. 나는 분위기 있는 사람이 좋다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 그렇지 않다.', type: [1] },
      { answer: 'c. 그렇다.', type: [2] },
      { answer: 'd. 매우 그렇다.', type: [3]}
    ]
  },
  {
    q: '10. 나는 즉흥적인 사람이 좋다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 그렇지 않다.', type: [1] },
      { answer: 'c. 그렇다.', type: [2] },
      { answer: 'd. 매우 그렇다.', type: [3]}
    ]
  },
  {
    q: '11. 나는 현실적인 사람이 좋다',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 그렇지 않다.', type: [1] },
      { answer: 'c. 그렇다.', type: [2] },
      { answer: 'd. 매우 그렇다.', type: [3]}
    ]
  },
  {
    q: '12. 나는 귀여운 사람이 좋다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 그렇지 않다.', type: [1] },
      { answer: 'c. 그렇다.', type: [2] },
      { answer: 'd. 매우 그렇다.', type: [3]}
    ]
  },
  {
    q: '13. 나는 연상이 좋다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 그렇지 않다.', type: [1] },
      { answer: 'c. 그렇다.', type: [2] },
      { answer: 'd. 매우 그렇다.', type: [3]}
    ]
  },
  {
    q: '14. 나는 동갑이 좋다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 그렇지 않다.', type: [1] },
      { answer: 'c. 그렇다.', type: [2] },
      { answer: 'd. 매우 그렇다.', type: [3]}
    ]
  },
  {
    q: '15. 나는 연하가 좋다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 그렇지 않다.', type: [1] },
      { answer: 'c. 그렇다.', type: [2] },
      { answer: 'd. 매우 그렇다.', type: [3]}
    ]
  },
  {
    q: '16. 나는 내가 좋아하는 사람보다 나를 좋아하는 사람이랑 사귀는 것이 낫다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 그렇지 않다.', type: [1] },
      { answer: 'c. 그렇다.', type: [2] },
      { answer: 'd. 매우 그렇다.', type: [3]}
    ]
  },
  {
    q: '17. 나는 계획적인 사람이 좋다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 그렇지 않다.', type: [1] },
      { answer: 'c. 그렇다.', type: [2] },
      { answer: 'd. 매우 그렇다.', type: [3]}
    ]
  },
  {
    q: '18. 나는 츤데레가 좋다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 그렇지 않다.', type: [1] },
      { answer: 'c. 그렇다.', type: [2] },
      { answer: 'd. 매우 그렇다.', type: [3]}
    ]
  },
  {
    q: '19. 나는 운동 잘하는 사람이 좋다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 그렇지 않다.', type: [1] },
      { answer: 'c. 그렇다.', type: [2] },
      { answer: 'd. 매우 그렇다.', type: [3]}
    ]
  },
  {
    q: '20. 나는 모두에게 인기 많은 사람이 좋다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 그렇지 않다.', type: [1] },
      { answer: 'c. 그렇다.', type: [2] },
      { answer: 'd. 매우 그렇다.', type: [3]}
    ]
  },
]

const infoList = [
  {
    name: '당신의 이상형은 하성열',
    desc: '지금 바로 고백해봐요!.'
  },
  {
    name: '당신의 이상형은 하성열!',
    desc: '지금 바로 고백해봐요!.'
  },
  {
    name: '당신의 이상형은 하성열!!',
    desc: '지금 바로 고백해봐요!!.'
  },
  {
    name: '당신의 이상형은 하성열!!!',
    desc: '지금 바로 고백해봐요!!!.'
  },

]
