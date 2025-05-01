import { Scenario } from '../types';

export const scenariosData: Scenario[] = [
  {
    id: 1,
    situation: "You notice a classmate posting embarrassing photos of another student in your school's group chat without their permission. These photos are starting to spread to other social media platforms.",
    options: [
      {
        id: "1a",
        text: "Ignore it – it's not your problem",
        consequence: "By staying silent, you become a passive participant. The harassment could continue and escalate, causing serious harm to the student.",
        isRecommended: false
      },
      {
        id: "1b",
        text: "Privately message the person posting and ask them to stop",
        consequence: "Speaking up is important. While this approach might help, the person might not listen to you alone, and the photos are already spreading.",
        isRecommended: false
      },
      {
        id: "1c",
        text: "Report the content to an adult/authority and support the targeted student",
        consequence: "This is the most effective approach. Reporting helps stop the bullying, and supporting the victim helps reduce the harm they experience.",
        isRecommended: true
      },
      {
        id: "1d",
        text: "Comment publicly that this behavior is wrong and others should stop sharing",
        consequence: "Speaking up publicly shows others that this behavior isn't acceptable. Combined with reporting, this can be very effective.",
        isRecommended: false
      }
    ]
  },
  {
    id: 2,
    situation: "You notice your friend seems withdrawn lately. When you ask what's wrong, they reluctantly show you anonymous threatening messages they've been receiving for weeks.",
    options: [
      {
        id: "2a",
        text: "Tell them to just ignore the messages and block the sender",
        consequence: "While blocking can help, ignoring serious threats isn't enough. Your friend is already suffering and needs more support than this.",
        isRecommended: false
      },
      {
        id: "2b",
        text: "Encourage them to document everything and report it to authorities/platforms",
        consequence: "This is a good approach. Documentation creates evidence, and reporting can help stop the harassment. Your friend needs active support through this process.",
        isRecommended: true
      },
      {
        id: "2c",
        text: "Offer to help them track down who's sending the messages to confront them",
        consequence: "Confrontation can be dangerous and often escalates the situation. This could put both of you at risk.",
        isRecommended: false
      },
      {
        id: "2d",
        text: "Tell them they're overreacting and should toughen up",
        consequence: "This dismisses your friend's valid feelings and experiences. It could make them feel worse and less likely to seek help when they need it.",
        isRecommended: false
      }
    ]
  },
  {
    id: 3,
    situation: "You're part of an online gaming community where one player is constantly being harassed for their voice/accent during voice chat sessions.",
    options: [
      {
        id: "3a",
        text: "Join in the teasing – everyone's just having fun",
        consequence: "What seems like fun to you is harmful harassment to the target. Joining in makes you a cyberbully too.",
        isRecommended: false
      },
      {
        id: "3b",
        text: "Privately message the player being targeted to say you support them",
        consequence: "Private support is helpful but doesn't address the public harassment. The player will still face bullying from others.",
        isRecommended: false
      },
      {
        id: "3c",
        text: "Speak up during the chat, saying the behavior is inappropriate and needs to stop",
        consequence: "Standing up publicly shows the targeted player they have support and signals to others that the behavior is unacceptable. This can change group dynamics.",
        isRecommended: true
      },
      {
        id: "3d",
        text: "Suggest to the targeted player that they should leave the community",
        consequence: "This punishes the victim rather than addressing the harmful behavior. It reinforces that harassment works to exclude people.",
        isRecommended: false
      }
    ]
  },
  {
    id: 4,
    situation: "You posted an angry comment about someone online when you were upset. It's gotten more attention than you expected, with others now also targeting this person. You didn't mean for this to happen.",
    options: [
      {
        id: "4a",
        text: "Do nothing – it wasn't your fault things escalated",
        consequence: "You started the situation, so you have responsibility. Doing nothing allows the harassment you initiated to continue.",
        isRecommended: false
      },
      {
        id: "4b",
        text: "Delete your original comment and distance yourself from the situation",
        consequence: "Deleting helps stop further damage, but it doesn't address the harm already done or the ongoing harassment you sparked.",
        isRecommended: false
      },
      {
        id: "4c",
        text: "Publicly apologize, ask others to stop, and reach out privately to the person you targeted",
        consequence: "Taking full responsibility and actively working to undo the harm is the right approach. This helps the person being harassed and shows others that such behavior is wrong.",
        isRecommended: true
      },
      {
        id: "4d",
        text: "Join in with the others – might as well, since it's already happening",
        consequence: "Continuing to participate in harassment you started shows a serious lack of empathy and responsibility. This would cause significant additional harm.",
        isRecommended: false
      }
    ]
  }
];