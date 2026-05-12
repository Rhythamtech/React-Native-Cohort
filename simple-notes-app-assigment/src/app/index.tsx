import { Image } from "expo-image";
import { Text, View, StyleSheet, FlatList, TextInput, Pressable, useColorScheme, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from "react";


const notes = [
  {
    "folderName": "Work Notes",
    "notes": [
      {
        "id": 1,
        "title": "Client meeting summary",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus vehicula elit eu dignissim. Vestibulum interdum id mauris vel aliquet. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse dignissim ipsum eget malesuada volutpat.",
        "placeholderImage": "https://placehold.co/160"
      },
      {
        "id": 2,
        "title": "Project deadline tasks",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus vehicula elit eu dignissim. Vestibulum interdum id mauris vel aliquet. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse dignissim ipsum eget malesuada volutpat.",
        "placeholderImage": "https://placehold.co/160"
      },
      {
        "id": 3,
        "title": "Sprint planning discussion",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus vehicula elit eu dignissim. Vestibulum interdum id mauris vel aliquet. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse dignissim ipsum eget malesuada volutpat.",
        "placeholderImage": "https://placehold.co/160"
      },
      {
        "id": 4,
        "title": "Bug fixes and improvements",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus vehicula elit eu dignissim. Vestibulum interdum id mauris vel aliquet. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse dignissim ipsum eget malesuada volutpat.",
        "placeholderImage": "https://placehold.co/160"
      }
    ]
  },
  {
    "folderName": "Personal Notes",
    "notes": [
      {
        "id": 5,
        "title": "Daily journal thoughts",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus vehicula elit eu dignissim. Vestibulum interdum id mauris vel aliquet. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse dignissim ipsum eget malesuada volutpat.",
        "placeholderImage": "https://placehold.co/160"
      },
      {
        "id": 6,
        "title": "Weekend plans checklist",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus vehicula elit eu dignissim. Vestibulum interdum id mauris vel aliquet. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse dignissim ipsum eget malesuada volutpat.",
        "placeholderImage": "https://placehold.co/160"
      },
      {
        "id": 7,
        "title": "Movies to watch later",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus vehicula elit eu dignissim. Vestibulum interdum id mauris vel aliquet. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse dignissim ipsum eget malesuada volutpat.",
        "placeholderImage": "https://placehold.co/160"
      },
      {
        "id": 8,
        "title": "Birthday gift ideas",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus vehicula elit eu dignissim. Vestibulum interdum id mauris vel aliquet. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse dignissim ipsum eget malesuada volutpat.",
        "placeholderImage": "https://placehold.co/160"
      }
    ]
  },
  {
    "folderName": "Study Notes",
    "notes": [
      {
        "id": 9,
        "title": "JavaScript async concepts",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus vehicula elit eu dignissim. Vestibulum interdum id mauris vel aliquet. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse dignissim ipsum eget malesuada volutpat.",
        "placeholderImage": "https://placehold.co/160"
      },
      {
        "id": 10,
        "title": "React hooks revision",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus vehicula elit eu dignissim. Vestibulum interdum id mauris vel aliquet. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse dignissim ipsum eget malesuada volutpat.",
        "placeholderImage": "https://placehold.co/160"
      },
      {
        "id": 11,
        "title": "Node.js API structure",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus vehicula elit eu dignissim. Vestibulum interdum id mauris vel aliquet. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse dignissim ipsum eget malesuada volutpat.",
        "placeholderImage": "https://placehold.co/160"
      },
      {
        "id": 12,
        "title": "Database normalization notes",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus vehicula elit eu dignissim. Vestibulum interdum id mauris vel aliquet. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse dignissim ipsum eget malesuada volutpat.",
        "placeholderImage": "https://placehold.co/160"
      }
    ]
  },
  {
    "folderName": "Travel Notes",
    "notes": [
      {
        "id": 13,
        "title": "Places to visit in Japan",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus vehicula elit eu dignissim. Vestibulum interdum id mauris vel aliquet. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse dignissim ipsum eget malesuada volutpat.",
        "placeholderImage": "https://placehold.co/160"
      },
      {
        "id": 14,
        "title": "Packing essentials list",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus vehicula elit eu dignissim. Vestibulum interdum id mauris vel aliquet. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse dignissim ipsum eget malesuada volutpat.",
        "placeholderImage": "https://placehold.co/160"
      },
      {
        "id": 15,
        "title": "Flight booking reminders",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus vehicula elit eu dignissim. Vestibulum interdum id mauris vel aliquet. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse dignissim ipsum eget malesuada volutpat.",
        "placeholderImage": "https://placehold.co/160"
      },
      {
        "id": 16,
        "title": "Hotel comparison details",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus vehicula elit eu dignissim. Vestibulum interdum id mauris vel aliquet. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse dignissim ipsum eget malesuada volutpat.",
        "placeholderImage": "https://placehold.co/160"
      }
    ]
  },
  {
    "folderName": "Fitness Notes",
    "notes": [
      {
        "id": 17,
        "title": "Monday workout routine",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus vehicula elit eu dignissim. Vestibulum interdum id mauris vel aliquet. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse dignissim ipsum eget malesuada volutpat.",
        "placeholderImage": "https://placehold.co/160"
      },
      {
        "id": 18,
        "title": "Healthy meal prep ideas",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus vehicula elit eu dignissim. Vestibulum interdum id mauris vel aliquet. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse dignissim ipsum eget malesuada volutpat.",
        "placeholderImage": "https://placehold.co/160"
      },
      {
        "id": 19,
        "title": "Weight tracking progress",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus vehicula elit eu dignissim. Vestibulum interdum id mauris vel aliquet. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse dignissim ipsum eget malesuada volutpat.",
        "placeholderImage": "https://placehold.co/160"
      },
      {
        "id": 20,
        "title": "Morning yoga exercises",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus vehicula elit eu dignissim. Vestibulum interdum id mauris vel aliquet. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse dignissim ipsum eget malesuada volutpat.",
        "placeholderImage": "https://placehold.co/160"
      }
    ]
  }
]


const lightStyles = StyleSheet.create({
  containerScreen: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#212529",
  },
  textLight: {
    fontSize: 22,
    fontWeight: "300",
    color: "gray",
    paddingBottom: 10,
  },
  subText: {
    fontSize: 22,
    fontWeight: "300",
    color: "gray",
    paddingBottom: 10,
  },
  notesView: {
    flexDirection: 'row',
    flex: 1,
    borderRadius: 20,
    padding: 5,
    backgroundColor: '#FFFFFF', // Elevated surface
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
  },
  searchBar: {
    height: 45,
    borderColor: "#DEE2E6",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    color: '#212529',
  },
  folderImage: {
    height: 90,
    width: 90,
  },
  noteImage: {
    height: 80,
    width: 80,
    borderRadius: 20,
  },
  backButton: {
    marginVertical: 8,
    padding: 8,
    backgroundColor: '#E9ECEF',
    borderRadius: 6,
    alignSelf: 'flex-start'
  },
  backButtonText: {
    color: '#495057',
    fontSize: 14,
    fontWeight: '500'
  },
});


const darkStyles = StyleSheet.create({
  containerScreen: {
    flex: 1,
    backgroundColor: '#121212',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#F8F9FA",
  },
  textLight: {
    fontSize: 22,
    fontWeight: "300",
    color: "gray",
    paddingBottom: 10,
  },
  subText: {
    fontSize: 22,
    fontWeight: "300",
    color: "gray",
    paddingBottom: 10,
  },
  notesView: {
    flexDirection: 'row',
    flex: 1,
    borderRadius: 20,
    padding: 5,
    backgroundColor: '#1E1E1E', // Slightly lighter than background
    borderWidth: 1,
    borderColor: '#333333',
  },
  searchBar: {
    height: 45,
    borderColor: "#444444",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#252525',
    color: '#F8F9FA',
  },
  folderImage: {
    height: 90,
    width: 90,
    opacity: 0.9, // Softens bright icons in dark mode
  },
  noteImage: {
    height: 80,
    width: 80,
    borderRadius: 20,
  },
  backButton: {
    marginVertical: 8,
    padding: 8,
    backgroundColor: '#2C2C2E',
    borderRadius: 6,
    alignSelf: 'flex-start'
  },
  backButtonText: {
    color: '#E9ECEF',
    fontSize: 14,
    fontWeight: '500'
  },
});


const EMOJI_MAP = {
  work: "💼",
  client: "🤝",
  meeting: "📅",
  project: "🚀",
  personal: "🏠",
  journal: "✍️",
  study: "📚",
  javascript: "💻",
  react: "⚛️",
  travel: "✈️",
  japan: "🇯🇵",
  fitness: "💪",
  workout: "🏋️‍♂️",
  default: "📝"
};

const allNotes = notes.flatMap(folder =>
  folder.notes.map(note => ({
    id: note.id,
    placeholder: note.placeholderImage, // Mapping placeholderImage to placeholder
    title: note.title,      // Creating a title from first word (as example)
    text: note.text,
    folderName: folder.folderName // Include folderName for filtering
  }))
);

function getEmoji(text: string) {
  for (const [key, emoji] of Object.entries(EMOJI_MAP)) {
    if (text.toLowerCase().includes(key)) return emoji;
  }
  return EMOJI_MAP.default;
}

function NotesFolder({ title, onPress, theme }: { title: string, onPress: () => void, theme: any }) {
  return (
    <Pressable style={{ flexDirection: "column" }} onPress={onPress}>
      <Image source={require('@/assets/images/folder.png')}
        style={theme.folderImage}
      />
      <Text style={{ color: theme.text.color, fontWeight: "bold", fontSize: 12, textAlign: "center" }}>{title}</Text>
    </Pressable>
  );
}

function NotesItem({ title, text, placeholderImage, backgroundColor, theme }: { title: string, text: string, placeholderImage: string, backgroundColor: string, theme: any }) {
  const icon = getEmoji(title || text);

  return (
    <View style={[theme.notesView, { backgroundColor }]} >
      {/* <Image source={placeholderImage}
        contentFit="cover"
        transition={200}
        style={theme.noteImage}
      /> */}

      <Text style={{ fontSize: 40, padding: 5, alignItems: "center" }}>{icon}</Text>
      <View style={{ flexDirection: "column", flex: 1, padding: 5 }}>
        <Text style={{ fontWeight: "bold", fontSize: 14, color: theme.text }}>{title}</Text>
        <Text style={{ fontWeight: "400", fontSize: 10, color: "gray" }}>{text.slice(0, 200)}...</Text>
      </View>
    </View>
  );
}

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectFolder, setSelectFolder] = useState<string | null>(null);
  const [toggleSelection, setToggleSelection] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState<Boolean | null>(null);
  const insets = useSafeAreaInsets();
  const systemColorScheme = useColorScheme();
  const { height, width } = useWindowDimensions();

  const numColumns = width > 600 ? 2 : 1;
  const horizontalPadding = width > 600 ? 30 : 10;
  const isLandscape = width > height;

  const darkTheme = isDarkTheme != null ? isDarkTheme : systemColorScheme === "dark"
  const theme = darkTheme ? darkStyles : lightStyles;

  let filteredNotes = allNotes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.text.toLowerCase().includes(searchQuery.toLowerCase())
  );


  if (selectFolder) {
    filteredNotes = filteredNotes.filter(note => note.folderName === selectFolder);
  }

  const handleFolderPress = (folderName: string) => {
    setSelectFolder(folderName);
    setToggleSelection(true);
  };
  const handleBack = () => {
    setSelectFolder(null);
    setToggleSelection(false);
  };

  return (
    <SafeAreaView style={[theme.containerScreen, { paddingHorizontal: horizontalPadding }]}>
      <StatusBar style={darkTheme ? "light" : "dark"} />

      <View>
        <Text style={theme.text} >Notes</Text>
        <Text style={theme.textLight} >{new Date().toLocaleDateString()}</Text>

        <Text style={{ fontSize: 29, fontWeight: "bold", position: "absolute", right: 0, top: 0 }} onPress={() => setIsDarkTheme(!darkTheme)} > {darkTheme ? "🌞" : "🌑"} </Text>
      </View>

      <TextInput style={theme.searchBar} placeholder="Search" placeholderTextColor="gray" value={searchQuery} onChangeText={setSearchQuery} />
      {!isLandscape &&
        <View>
          <Text style={theme.subText}>My Folders</Text>
          <FlatList
            data={notes}
            renderItem={({ item }) => (
              <NotesFolder
                theme={theme}
                title={item.folderName}
                onPress={() => handleFolderPress(item.folderName.toString())}
              />
            )}
            keyExtractor={(item) => item.folderName.toString()}
            horizontal
            contentContainerStyle={{ gap: 5, paddingBottom: 10 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      }
      <View>
        {selectFolder && (
          <Pressable onPress={handleBack} style={theme.backButton}>
            <Text style={theme.backButtonText}>← Back to All Notes</Text>
          </Pressable>
        )}
        <Text style={theme.subText}>Recent Notes{selectFolder ? ` - ${selectFolder}` : ''}</Text>
        <FlatList
          data={filteredNotes}
          key={numColumns} // Changing key forces the list to re-render when column count changes
          numColumns={numColumns}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingTop: 10, paddingBottom: insets.bottom + insets.bottom * 0.10, gap: 10 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <NotesItem
              title={item.title}
              text={item.text}
              placeholderImage={item.placeholder}
              theme={theme}
              backgroundColor={index % 2 === 0 ? "#8ef393" : "#d1eaff"}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

