import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Platform } from 'react-native';
import { useState } from 'react';
// Mic aur Paperclip hata diye, Sun aur Moon add kar diye
import { Plus, MessageSquare, Activity, User, Command, ChevronRight, Sun, Moon } from 'lucide-react-native';

const { width } = Dimensions.get('window');
const isWeb = width > 768;

export default function App() {
  const [query, setQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true); // Theme Toggle State

  // 🎨 DYNAMIC THEME (Light & Dark Mode)
  const theme = {
    bgMain: isDarkMode ? '#09090E' : '#F1F5F9',      
    bgSidebar: isDarkMode ? '#0D0D14' : '#FFFFFF',   
    bgCard: isDarkMode ? '#13131A' : '#FFFFFF',      
    accent: '#8B5CF6',                               // Neon Purple
    accentGlow: isDarkMode ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.1)',
    textLight: isDarkMode ? '#F8FAFC' : '#0F172A',   // Safed in dark, Kaala in light
    textMuted: '#64748B',
    border: isDarkMode ? '#1E1E28' : '#E2E8F0',
    success: '#10B981'
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.bgMain }]}>
      <StatusBar style={isDarkMode ? "light" : "dark"} />

      {/* 📱 SIDEBAR */}
      {isWeb && (
        <View style={[styles.sidebar, { backgroundColor: theme.bgSidebar, borderColor: theme.border }]}>
          <View style={styles.sidebarHeader}>
            <View style={[styles.logoIcon, { backgroundColor: theme.accentGlow }]}>
               <Text style={{color: theme.accent, fontWeight: 'bold'}}>EI</Text>
            </View>
            <Text style={[styles.logoText, { color: theme.textLight }]}>Executive Intelligence</Text>
          </View>

          <TouchableOpacity style={[styles.newChatBtn, { borderColor: theme.accent }]}>
            <Plus color={theme.accent} size={18} style={{ marginRight: 8 }} />
            <Text style={{ color: theme.accent, fontWeight: '600' }}>New Session</Text>
          </TouchableOpacity>

          <Text style={[styles.sectionTitle, { color: theme.textMuted }]}>RECENT ACTIVITY</Text>
          <ScrollView>
            <View style={styles.historyItem}>
              <MessageSquare color={theme.textMuted} size={16} />
              <Text style={[styles.historyText, { color: theme.textMuted }]}>Analyze the project_data...</Text>
            </View>
            <View style={styles.historyItem}>
              <MessageSquare color={theme.textMuted} size={16} />
              <Text style={[styles.historyText, { color: theme.textMuted }]}>Quantum computing brief</Text>
            </View>
          </ScrollView>

          <View style={styles.sidebarFooter}>
             <Text style={{color: theme.textMuted, fontSize: 12, fontWeight: 'bold'}}>HANU AI v1.1</Text>
          </View>
        </View>
      )}

      {/* 🖥️ MAIN WORKSPACE */}
      <View style={styles.mainContent}>
        
        {/* TOP NAVIGATION */}
        <View style={[styles.topNav, { backgroundColor: theme.bgSidebar, borderColor: theme.border }]}>
          {!isWeb && <Text style={[styles.logoText, { color: theme.textLight }]}>Hanu AI</Text>}
          
          <View style={styles.roleSelector}>
            <TouchableOpacity style={[styles.roleBadge, { backgroundColor: theme.accent }]}>
              <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 12 }}>Business Owner</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.userProfile}>
            {/* THEME TOGGLE BUTTON */}
            <TouchableOpacity 
              onPress={() => setIsDarkMode(!isDarkMode)}
              style={[styles.themeToggle, { borderColor: theme.border, backgroundColor: theme.bgCard }]}
            >
              {isDarkMode ? <Sun color="#F0E68C" size={18} /> : <Moon color="#1E293B" size={18} />}
            </TouchableOpacity>

            <View style={[styles.avatar, { backgroundColor: theme.border }]}>
              <User color={theme.textLight} size={18} />
            </View>
            {isWeb && <Text style={{ color: theme.textLight, marginLeft: 10, fontWeight: '600' }}>Prateek</Text>}
          </View>
        </View>

        {/* DASHBOARD CONTENT */}
        <ScrollView contentContainerStyle={styles.dashboardScroll}>
          <View style={styles.dashboardInner}>
            
            <View style={styles.engineHeader}>
              <Activity color={theme.textMuted} size={16} style={{marginRight: 8}}/>
              <Text style={{color: theme.textMuted, fontSize: 12, letterSpacing: 1}}>EXECUTE VIA STRATEGIC ENGINE</Text>
            </View>

            {/* COMMAND CENTER INPUT (Mic and Paperclip Removed) */}
            <View style={[styles.commandCenter, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
              <View style={styles.commandHeader}>
                <Command color={theme.accent} size={14} style={{marginRight: 6}} />
                <Text style={{color: theme.textLight, fontSize: 12, fontWeight: 'bold'}}>COMMAND THE COUNCIL</Text>
              </View>

              <View style={styles.inputArea}>
                <TextInput
                  style={[styles.mainInput, { color: theme.textLight }]}
                  placeholder="Ask the Council... e.g. Synthesize a research report"
                  placeholderTextColor={theme.textMuted}
                  value={query}
                  onChangeText={setQuery}
                  multiline
                />
                <TouchableOpacity style={[styles.submitBtn, { backgroundColor: theme.accent }]}>
                  <ChevronRight color="#FFF" size={20} />
                </TouchableOpacity>
              </View>
              
              <Text style={{color: theme.textMuted, fontSize: 11, marginTop: 15}}>Shift + Return for new line  •  Strategy engine active</Text>
            </View>

            {/* ACTION CODEX LOG */}
            <View style={[styles.actionLog, { borderColor: theme.border, backgroundColor: theme.bgCard }]}>
              <View style={[styles.statusDot, { backgroundColor: theme.accent }]} />
              <Text style={{color: theme.textMuted, fontSize: 13, fontWeight: 'bold', marginRight: 10}}>ACTION CODEX  |</Text>
              <Text style={{color: theme.textLight, fontSize: 13}}>Executive Council reset: New session ready.</Text>
            </View>

            {/* STATS ROW */}
            <View style={styles.statsRow}>
               <View style={styles.vaultTitle}>
                  <View style={[styles.logoIcon, { backgroundColor: theme.border, width: 30, height: 30, borderRadius: 8 }]}>
                    <Command color={theme.accent} size={14} />
                  </View>
                  <View style={{marginLeft: 15}}>
                     <Text style={{color: theme.textLight, fontWeight: 'bold', fontSize: 16}}>Result Vault</Text>
                     <Text style={{color: theme.textMuted, fontSize: 12}}>0 SYNTHESISES · LIVE</Text>
                  </View>
               </View>

               <View style={styles.metricsContainer}>
                  <View style={[styles.metricCard, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
                    <View style={styles.metricHeader}>
                      <Text style={{color: theme.textMuted, fontSize: 11, fontWeight: 'bold'}}>EFFICIENCY GAIN</Text>
                      <Text style={{color: theme.success, fontSize: 12, fontWeight: 'bold'}}>+4.2</Text>
                    </View>
                    <Text style={{color: theme.textLight, fontSize: 24, fontWeight: 'bold', marginTop: 10}}>+38.4%</Text>
                    <View style={[styles.fakeChart, { borderBottomColor: theme.accent }]} />
                  </View>

                  <View style={[styles.metricCard, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
                    <View style={styles.metricHeader}>
                      <Text style={{color: theme.textMuted, fontSize: 11, fontWeight: 'bold'}}>ESTIMATED ROI</Text>
                      <Text style={{color: theme.success, fontSize: 12, fontWeight: 'bold'}}>+0.8</Text>
                    </View>
                    <Text style={{color: theme.textLight, fontSize: 24, fontWeight: 'bold', marginTop: 10}}>4.8x</Text>
                    <View style={[styles.fakeChart, { borderBottomColor: '#F59E0B' }]} />
                  </View>
               </View>
            </View>

            {/* BOTTOM GREETING */}
            <View style={styles.bottomGreeting}>
                <View style={[styles.logoIcon, { backgroundColor: theme.accentGlow, width: 50, height: 50, borderRadius: 15, marginBottom: 20 }]}>
                    <Text style={{color: theme.accent, fontWeight: 'bold', fontSize: 20}}>EI</Text>
                </View>
                <Text style={{color: theme.textLight, fontSize: 32, fontWeight: 'bold'}}>Welcome, <Text style={{color: theme.accent}}>Prateek.</Text></Text>
            </View>

          </View>
        </ScrollView>
      </View>
    </View>
  );
}

// 📐 STYLES (No changes needed here, logic is in theme)
const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row' },
  sidebar: { width: 260, borderRightWidth: 1, padding: 20, paddingTop: Platform.OS === 'web' ? 20 : 50 },
  sidebarHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 40 },
  logoIcon: { width: 36, height: 36, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  logoText: { fontSize: 16, fontWeight: 'bold', letterSpacing: 0.5 },
  newChatBtn: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 12, borderRadius: 30, justifyContent: 'center', marginBottom: 30 },
  sectionTitle: { fontSize: 11, fontWeight: 'bold', letterSpacing: 1, marginBottom: 15 },
  historyItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, marginBottom: 5 },
  historyText: { fontSize: 13, marginLeft: 12 },
  sidebarFooter: { marginTop: 'auto', paddingTop: 20 },
  mainContent: { flex: 1, display: 'flex' },
  topNav: { height: 70, borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 30 },
  roleSelector: { flexDirection: 'row', alignItems: 'center' },
  roleBadge: { paddingHorizontal: 15, paddingVertical: 6, borderRadius: 20 },
  userProfile: { flexDirection: 'row', alignItems: 'center' },
  themeToggle: { width: 36, height: 36, borderRadius: 18, borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  avatar: { width: 32, height: 32, borderRadius: 16, justifyContent: 'center', alignItems: 'center' },
  dashboardScroll: { flexGrow: 1, alignItems: 'center' },
  dashboardInner: { width: '100%', maxWidth: 900, padding: 20, paddingTop: 60, paddingBottom: 60 },
  engineHeader: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 30 },
  commandCenter: { borderWidth: 1, borderRadius: 16, padding: 20, marginBottom: 20 },
  commandHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  inputArea: { flexDirection: 'row', alignItems: 'center' },
  mainInput: { flex: 1, minHeight: 50, fontSize: 16, outlineStyle: 'none' }, 
  submitBtn: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginLeft: 15 },
  actionLog: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 10, padding: 15, marginBottom: 40 },
  statusDot: { width: 8, height: 8, borderRadius: 4, marginRight: 15 },
  statsRow: { flexDirection: isWeb ? 'row' : 'column', justifyContent: 'space-between', alignItems: isWeb ? 'flex-end' : 'flex-start', marginBottom: 60, gap: 20 },
  vaultTitle: { flexDirection: 'row', alignItems: 'center' },
  metricsContainer: { flexDirection: 'row', gap: 15 },
  metricCard: { width: 160, borderWidth: 1, borderRadius: 12, padding: 15, overflow: 'hidden' },
  metricHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  fakeChart: { position: 'absolute', bottom: -10, left: 0, right: 0, height: 30, borderBottomWidth: 3, borderLeftWidth: 3, borderLeftColor: 'transparent', opacity: 0.5 },
  bottomGreeting: { alignItems: 'center', marginTop: 20 }
});