import api from '@/services/api'

export default {
  fetchShortcuts() {
    return api.get(`/static/shortcuts.json`)
              .then(response => response.data)
  },
}