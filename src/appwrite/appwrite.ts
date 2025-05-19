import {
  Client,
  Account,
  Databases,
  ID,
  OAuthProvider,
  Query,
  Models,
} from 'react-native-appwrite';
import { makeRedirectUri } from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';

// Use for handling browser-based authentication.
// basically it will open google's consent-screen(A screen where you can select gmail account for login)
//  by which you can auth
const client = new Client();
export const account = new Account(client);
const database = new Databases(client);

export const config = {
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  platform: process.env.EXPO_PUBLIC_APPWRITE_PLATFORM,
  databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
  usersCollectionId: process.env.EXPO_PUBLIC_APPWRITE_USERS_COLLECTION_ID,

  coursesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_COURSES_COLLECTION_ID,
  chaptersCollectionId: process.env.EXPO_PUBLIC_APPWRITE_CHAPTERS_COLLECTION_ID,
  chaptersTopicsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_CHAPTERS_TOPICS_COLLECTION_ID,
  flashcardsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_FLASHCARDS_COLLECTION_ID,
  chaptersQnaCollectionId: process.env.EXPO_PUBLIC_APPWRITE_CHAPTERS_QNA_COLLECTION_ID,
  chaptersQuizzesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_CHAPTERS_QUIZZES_COLLECTION_ID,

  // extraInfoCollectionId: process.env.EXPO_PUBLIC_APPWRITE_EXTRA_INFO_COLLECTION_ID,
  // ingredientsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_INGREDIENTS_COLLECTION_ID,
  // stepsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_STEPS_COLLECTION_ID,
  // bookmarkCollectionId: process.env.EXPO_PUBLIC_APPWRITE_BOOKMARK_COLLECTION_ID,
};

// that ! is for saying to typescrip that these exists
client.setEndpoint(config.endpoint!).setProject(config.projectId!).setPlatform(config.platform!);

export const createUser = async () => {
  try {
    // What if everything happens correct ? Go to this URI
    // poining to onboarding screen
    const redirectUri = Linking.createURL('/');
    // Ask OAut token from appwrite using google Provider
    const response = await account.createOAuth2Token(OAuthProvider.Google, redirectUri);

    // If not get Token
    if (!response) throw new Error('Failed to Login');

    // If got token then open a browser for auth asynchronously
    const browserResult = await WebBrowser.openAuthSessionAsync(
      // pass resonse as string
      response.toString(),
      // Also redirectURI
      redirectUri
    );
    // If not browser not able to login then throw error
    if (browserResult.type !== 'success') throw new Error("Browser didn't open");

    // If not browser able to login
    // create a url of it
    const url = new URL(browserResult.url);

    // then extraact secret and  from browserURL
    const secret = url.searchParams.get('secret')?.toString();
    const userId = url.searchParams.get('userId')?.toString();

    // if no secret or userId exist then throw a error
    if (!secret || !userId) throw new Error("Didn't get any secret");

    // if got secret or userId
    const session = await account.createSession(userId, secret);

    if (!session) throw new Error("Didn't able to create sessions");

  const currentUser = await account.get();
  if (!currentUser) throw new Error("Failed to get currentUser")

 const newUser = await database.createDocument(
config.databaseId!,
config.usersCollectionId!,
ID.unique(),
{
  user_id: currentUser.$id,
  username: currentUser.name, 
  email: currentUser.email,
}
 )
 if (!newUser) new Error("Failed to create new User")

    return session;
  } catch (error) {
    console.log('Error from login in appwrite.ts :', error);
    throw new Error('Error while trying to login ');
  }
};

export const logout = async () => {
  try {
    // only current jo bhi iss id address par hai uska
    await account.deleteSession('current');
  } catch (error) {
    console.log('Error from login in appwrite.ts :', error);
    throw new Error('Error while trying to login ');
  }
};

export const getCurrentUser = async () => {
  try {
    const result = await account.get();
    // console.log('Result from getCurrentUser fun in appwrite.ts :', result);
    // if you want to photos of user then you can check in 59 mins
    // if(result.$id){

    // }
    // you need this so that funtion can execute so have to return
    return result;
  } catch (error) {
    // using here log cause I don't want on
    // user-end get a model for showing error information
    console.log('Error from getCurrentUser fun in appwrite.ts ', error);
    // that means we didn't get anything
    return null;
  }
};


export const addDataDb = async(course:any) => {
  try {
     console.log("Curese from addDB :",course);
      const currentUser = await account.get();
    const promise =await database.createDocument(
      config.databaseId!,
      config.coursesCollectionId!,
      ID.unique(),
      {
        user_id: currentUser.$id,
        course_name: course.course_name,
        description:course.description,
        category: course.category,
        banner_image: course.banner_image,
      }
    )
    console.log("REQ from fetchedData :",promise);
    return promise;
    
  } catch (error) {
    console.log("Error from addDataDb in appwrite.ts :",error);
    throw new Error("Failed to add data in DB")
    
  }
}

export const fetchCourse = async() => {
  try {
    const promise = await database.listDocuments(
      config.databaseId!,
      config.coursesCollectionId!
    )
return promise.documents
  } catch (error) {
    console.log("Error from fetchCourse :",error);
    throw new Error("Failed to Fetch Courses")
    
  }
} 